namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrLoanPaymentServiceSchema

	/// <exclude/>
	public class UsrLoanPaymentServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrLoanPaymentServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrLoanPaymentServiceSchema(UsrLoanPaymentServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("3b7e3c6b-1a35-4a7f-b20e-b444676fdef0");
			Name = "UsrLoanPaymentService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7edb6eb4-4150-4eb2-9f89-871c303413ce");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,75,173,40,72,77,46,73,77,81,40,201,87,72,74,85,112,86,86,72,206,79,73,85,200,72,45,74,213,3,1,0,81,215,41,235,32,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("3b7e3c6b-1a35-4a7f-b20e-b444676fdef0"));
		}

		#endregion

	}

	#endregion

}

