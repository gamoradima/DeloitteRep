namespace Terrasoft.Configuration
{
	using System.ServiceModel;
	using System.ServiceModel.Web;
	using System.ServiceModel.Activation;
	using Terrasoft.Core.DB;
	using Terrasoft.Web.Common;
	using System;
	using System.Web.SessionState;
	using Terrasoft.Core;
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class LoanPaymentService : BaseService, IReadOnlySessionState
	{
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
	RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public decimal GetTotalPaymentAmountByStatusId(string loanPaymentStatusId)
        {
			if (string.IsNullOrEmpty(loanPaymentStatusId))
			{
				return -1;
			}
			UserConnection my_UC;
			if (this.UserConnection != null)
			{
				my_UC = this.UserConnection; // in a normal web service call (authenticated request)
			}
			else
			{
				my_UC = this.AppConnection.SystemUserConnection; // in case of an anonymous request
			}
			Select select = new Select(my_UC)
				.Column(Func.Sum("UsrLoanPaymentAmount"))
				.From("UsrLoanPayments")
				.Where("UsrPaymentStatusId").IsEqual(Column.Parameter(new Guid(loanPaymentStatusId)))
				as Select;
			decimal result = select.ExecuteScalar<decimal>();
			return result;
		}
		[OperationContract]
		[WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public string GetExample()
		{
			return "OK!";
		}

	}
}