namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrCalcAvgLoanPaymentProcessMethodsWrapper

	/// <exclude/>
	public class UsrCalcAvgLoanPaymentProcessMethodsWrapper : ProcessModel
	{

		public UsrCalcAvgLoanPaymentProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrLoanPayments"); // select .... FROM UsrLoanPayments
			var amounColumn = esq.AddColumn("UsrLoanPaymentAmount");  // select UsrLoanPaymentAmount from UsrLoanPayments where ...
			
			Guid statusId = Get<Guid>("PaymentStatusIdParameter");
			
			var statusFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrPaymentStatus", statusId);  
			esq.Filters.Add(statusFilter);  // select .. from .. WHERE UsrPaymentStatusId = :P1
			
			string sqlText = esq.GetSelectQuery(UserConnection).GetSqlText();
			Set("SqlTextParameter", sqlText);
			
			var entityCollection = esq.GetEntityCollection(UserConnection);
			
			decimal totalAmount = 0;
			foreach(var entity in entityCollection) {
				decimal amount = entity.GetTypedColumnValue<decimal>(amounColumn.Name); // reading using column alias
				totalAmount = totalAmount + amount;
			}
			decimal avgAmount = 0;
			if (entityCollection.Count > 0) {
				avgAmount = totalAmount / entityCollection.Count;
			}
			
			Set("AvgAmountParameter", avgAmount);
			
			return true;
		}

		#endregion

	}

	#endregion

}

