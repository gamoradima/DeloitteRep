namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    [EntityEventListener(SchemaName = "UsrLoanPayments")]
    public class RealtyEntityEventListener : BaseEntityEventListener
    {
        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            Entity payment = (Entity)sender;
            decimal amount = payment.GetTypedColumnValue<decimal>("UsrLoanPaymentAmount");
            if (amount > 1000000)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(payment.UserConnection.ResourceStorage,
                    "UsrLoanPaymentEvents", "LocalizableStrings.ValueIsTooBig.Value").ToString();

                string message = string.Format(messageTemplate, "1.0M");
                throw new Exception(message);
            }
        }
    }
}

