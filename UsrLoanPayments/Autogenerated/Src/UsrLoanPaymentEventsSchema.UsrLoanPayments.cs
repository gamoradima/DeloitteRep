namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrLoanPaymentEventsSchema

	/// <exclude/>
	public class UsrLoanPaymentEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrLoanPaymentEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrLoanPaymentEventsSchema(UsrLoanPaymentEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("c8622cd9-ad84-4b62-a83a-2b80bcef9046");
			Name = "UsrLoanPaymentEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7edb6eb4-4150-4eb2-9f89-871c303413ce");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,211,211,211,211,3,0,24,104,171,132,4,0,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("64f6fe3f-3133-8096-76c3-7bf998ae3137"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("7edb6eb4-4150-4eb2-9f89-871c303413ce"),
				CreatedInSchemaUId = new Guid("c8622cd9-ad84-4b62-a83a-2b80bcef9046"),
				ModifiedInSchemaUId = new Guid("c8622cd9-ad84-4b62-a83a-2b80bcef9046")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("c8622cd9-ad84-4b62-a83a-2b80bcef9046"));
		}

		#endregion

	}

	#endregion

}

