module.exports = {
    wbb_report_activated_tblName : "col_trn_reportbuilder",
    wbb_report_deactivated_tblName : "col_trn_reportbuilder",
    priority_report_activated_tblName : "col_trn_reportbuilder",
    equalsto : '=' ,
    greaterthan : '>' ,
    lessthan	: '<' ,
    greaterthanequalsto : '>=' ,
	lessthanequalsto	: '<=' ,
    notequalsto : '<>',
    maxRows : 1000 ,
    batchSize : 500,

    priority_report_activated_P1_query : " SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
" szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
" fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
" szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode,"+
" Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
" Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype "+
"  FROM col_trn_reportbuilder "+
" WHERE mfs06 = 'P1' "+
" AND cservicestatus <> 'D'",


priority_report_activated_P2_query :" SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
" szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
" fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
" szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode,"+
" Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
" Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype "+
"  FROM col_trn_reportbuilder "+
" WHERE mfs06 = 'P2' "+
" AND cservicestatus <> 'D'",

priority_report_activated_P3_query :" SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
" szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
" fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
" szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode,"+
" Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
" Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype "+
"  FROM col_trn_reportbuilder "+
" WHERE mfs06 = 'P3' "+
" AND cservicestatus <> 'D'",


priority_report_activated_P4_query :" SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
" szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
" fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
" szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode,"+
" Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
" Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype "+
"  FROM col_trn_reportbuilder "+
" WHERE mfs06 = 'P4' "+
" AND cservicestatus <> 'D'",


priority_report_activated_P5_query : " SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
" szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
" fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
" szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode,"+
" Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
" Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype "+
"  FROM col_trn_reportbuilder "+
" WHERE mfs06 = 'P5' "+
" AND cservicestatus <> 'D'",


priority_report_deactivated_P1_query : "SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
"szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
"fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
"szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode, "+
"Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
"Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype "+
" FROM col_trn_reportbuilder "+
"WHERE mfs06 = 'P1' "+
"AND cservicestatus = 'D'   "+
"And fosamt <> 0 ",

priority_report_deactivated_P2_query : "SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
"szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
"fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
"szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode, "+
"Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
"Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype "+
" FROM col_trn_reportbuilder "+
"WHERE mfs06 = 'P2' "+
"AND cservicestatus = 'D'   "+
"And fosamt <> 0  ",

priority_report_deactivated_P3_query :"SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
"szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
"fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
"szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode, "+
"Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
"Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype "+
" FROM col_trn_reportbuilder "+
"WHERE mfs06 = 'P3' "+
"AND cservicestatus = 'D'   "+
"And fosamt <> 0   ",

priority_report_deactivated_P4_query : "SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
"szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
"fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
"szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode, "+
"Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
"Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype "+
" FROM col_trn_reportbuilder "+
"WHERE mfs06 = 'P4' "+
"AND cservicestatus = 'D'   "+
"And fosamt <> 0 ",

priority_report_deactivated_P5_query : "SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
"szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
"fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
"szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode, "+
"Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
"Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype "+
" FROM col_trn_reportbuilder "+
"WHERE mfs06 = 'P5' "+
"AND cservicestatus = 'D'   "+
"And fosamt <> 0 ",

wbb_report_activated_query : " SELECT ctr.szagreementno,ctr.szname,ctr.cservicestatus,ctr.szmobileno,ctr.mfs02 DC,ctr.szcyclecode,ctr.dtregistration, "+
" ctr.szmarketsegdesc,ctr.szrateplan,ctr.ioddays,ctr.szbucketcode,ctr.fosamt,ctr.foverdueamt,ctr.fbucket0,ctr.fbucket1,  "+
" ctr.fbucket2,ctr.fbucket3,ctr.fbucket4,ctr.fbucket5,ctr.fbucket6,ctr.fbucketamt7,ctr.szproductcode, ctr.szmoccode,ctr.mfs04,   "+
" ctr.szmktcode,Get_Codedesc('001',ctr.szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),ctr.szcollectioncode, "+
" Get_Codedesc('001',ctr.szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),ctr.Mfs06 priority,  "+
" Get_Codedesc('001',ctr.szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),ctr.szpaymenttype, "+
" ctr.SZRATEPLAN \"Rate Plan\", "+
" ctr.ISICNT \"Total SI\", "+
" ctr.IACTIVESICNT \"Total Active SI\", "+
" ctr.IBARREDSICNT \"Total Barred SI\", "+
" ctr.ISUSPENDEDSICNT \"Total Suspended SI\", "+
" ctr.IDEACTIVESICNT \"Total Deactive SI\", "+
" (select a.dtlastdeact from col_trn_accountstatusreport a where a.iagreementseqno=ctr.iagreementseqno AND ctr.szpartitioncode = a.szpartitioncode "+
" AND ctr.szorgcode = a.szorgcode) \"Deactivation date\", "+
" szdealercode \"Dealer Code\" "+
" FROM col_trn_reportbuilder ctr "+
" WHERE ctr.MFS03 = 'B'  "+
" AND ctr.cservicestatus <> 'D' ",

wbb_report_deactivated_query : " SELECT szagreementno,szname,cservicestatus,szmobileno,mfs02 DC,szcyclecode,dtregistration, "+
" szmarketsegdesc,szrateplan,ioddays,szbucketcode,fosamt,foverdueamt,fbucket0,fbucket1, "+
" fbucket2,fbucket3,fbucket4,fbucket5,fbucket6,fbucketamt7,szproductcode, szmoccode,mfs04, "+
" szmktcode,Get_Codedesc('001',szMktCode,'COL_MST_SETTINGS','MARKET_CODE','N'),szcollectioncode, "+
" Get_Codedesc('001',szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N'),Mfs06 priority, "+
" Get_Codedesc('001',szriskcode,'COL_MST_SETTINGS','RISKCAT','N'),szpaymenttype,   "+
" ctr.SZRATEPLAN \"Rate Plan\", "+
" ctr.ISICNT \"Total SI\", "+
" ctr.IACTIVESICNT \"Total Active SI\", "+
" ctr.IBARREDSICNT \"Total Barred SI\", "+
" ctr.ISUSPENDEDSICNT \"Total Suspended SI\", "+
" ctr.IDEACTIVESICNT \"Total Deactive SI\", "+
" (select a.dtlastdeact from col_trn_accountstatusreport a where a.iagreementseqno=ctr.iagreementseqno "+
" AND ctr.szpartitioncode = a.szpartitioncode "+
" AND ctr.szorgcode = a.szorgcode) \"Deactivation date\", "+
" szdealercode \"Dealer Code\" "+
" FROM col_trn_reportbuilder ctr   "+
" WHERE ctr.MFS03 = 'B'     ",

device_finance_report_query : " SELECT ctr.szagreementno \"Account Number\", "+
"  ctr.szname \"Customer Name\", "+
"  ctr.dtregistration \"Registration Date\", "+
"  Get_Codedesc ('001', "+
"        ctsi.szfield11, "+
"        'COL_MST_PACKAGE', "+
"        'PACKAGE_CODE', "+
"        'N')   "+
"     \"Rate Plan\", "+
"  ctr.cservicestatus \"Account Status\", "+
"   ctr.mfs01 \"Risk Code\", "+
"  (SELECT DECODE (cta.irelatedacctcount, 0, 'N', 'Y')  "+
"     FROM col_trn_accountstatusreport cta "+
"    WHERE     ctr.iagreementseqno = cta.iagreementseqno "+
"  AND ctr.szOrgCode = cta.szOrgCode "+
"  AND ctr.szPartitionCode = cta.szPartitionCode) "+
"     \"Related account Y/N\",  "+
"  ctr.CLIVEPROMISE \"PTP Live Y/N\",   "+
"  ctr.szpaymenttype \"Payment Method\", "+
"  ctr.szmarketsegdesc \"Market Segment\", "+
"  Get_Codedesc ('001', "+
"        szMktCode, "+
"        'COL_MST_SETTINGS', "+
"        'MARKET_CODE', "+
"        'N')   "+
"     \"Market Code Desc\", "+
"  Get_Codedesc ('001', "+
"        szcollectioncode, "+
"        'COL_MST_SETTINGS', "+
"        'COLLECTION_CODE', "+
"        'N')   "+
"     \"Colletion Code Desc\",  "+
"  ctr.szmoccode \"MOC Code\",  "+
"  ctr.fcreditlimit \"Credit Limit\",   "+
"  ctr.mfs02 \"Debt Category\", "+
"  ctr.ioddays \"OD days\", "+
"  ctr.szbucketcode \"Ageing Bucket\",  "+
"  ctr.fosamt \"Total Outstanding\", "+
"  ctr.fbucket0 \"Current\", "+
"  ctr.fbucket1 \"30d\", "+
"  ctr.fbucket2 \"60d\", "+
"  ctr.fbucket3 \"90d\", "+
"  ctr.fbucket4 \"120d\", "+
"  ctr.fbucket5 \"150d\", "+
"  ctr.fbucket6 \"180d\", "+
"  ctr.fbucketamt7 \"210d+\",   "+
"  ctsi.szmsisdn \"MSISDN\", "+
"  ctsi.cstatus \"MSISDN status\", "+
"  ctp.dtactive \"Package Active Date\", "+
"  ctr.szwfcode \"Workflow Code\", "+
"  ctr.szwfstatecode \"Workflow State\", "+
"  ctr.flastpymtamt \"Last Payment Amt\", "+
"  ctr.dtlastpymt \"Date Last Payment\", "+
"  (ctr.isicnt - ctr.ideactivesicnt) \"Non Deact SI cnt\", "+
"  ctr.szcyclecode \"BC\", "+
"  ctr.szidcardno \"IC No\", "+
"  ctr.szoldicno \"OLD IC\", "+
"  cmc.szpassportno \"Passport No\", "+
"  cmc.SZFIELD12 \"Other ID\"   "+
"  FROM col_trn_package ctp, "+
"  col_trn_reportbuilder ctr,   "+
"  col_trn_serviceinstance ctsi, "+
"  col_mst_customer cmc "+
"    WHERE     ctr.szorgcode = '001' "+
"  AND ctr.szorgcode = ctp.szorgcode "+
"  AND ctr.szpartitioncode = ctp.szpartitioncode "+
"  AND ctr.iagreementseqno = ctp.iagreementseqno "+
"      AND ctp.szpackagecode in('41805','41851','41866','41869','41844') "+
"  AND (ctp.cstatus = 'A' or CTP.CSTATUS = 'D') "+
"  AND ctp.ipackageseqno > 357647951 "+
"  AND ctp.szorgcode = '001' "+
"  AND ctp.iagreementseqno = ctsi.iagreementseqno "+
"  AND ctp.szorgcode = ctsi.szorgcode   "+
"  AND ctp.szpartitioncode = ctsi.szpartitioncode "+
"  AND ctp.iserviceinstanceseqno = ctsi.iserviceinstanceseqno "+
"  AND ctr.szorgcode = ctsi.szorgcode   "+
"  AND ctr.szpartitioncode = ctsi.szpartitioncode "+
"  AND ctr.iagreementseqno = ctsi.iagreementseqno "+
"  AND cmc.szOrgCode = ctr.szOrgCode "+
"  AND cmc.iCustomerGroupSeqNo = ctr.iCustomerGroupSeqNo "+
"  AND cmc.Szpartitioncode = ctr.Szpartitioncode "+
"  AND cmc.szorgcode = ctp.szorgcode "+
"  AND cmc.szpartitioncode = ctp.szpartitioncode "+
"  AND cmc.szorgcode = ctsi.szorgcode   "+
"  AND cmc.szpartitioncode = ctsi.szpartitioncode "+
" ORDER BY ctp.dtactive DESC    ",


device_finance_report_active_query : " SELECT ctr.szagreementno \"Account Number\", "+
"  ctr.szname \"Customer Name\", "+
"  ctr.dtregistration \"Registration Date\", "+
"  Get_Codedesc ('001', "+
"        ctsi.szfield11, "+
"        'COL_MST_PACKAGE', "+
"        'PACKAGE_CODE', "+
"        'N')   "+
"     \"Rate Plan\", "+
"  ctr.cservicestatus \"Account Status\", "+
"   ctr.mfs01 \"Risk Code\", "+
"  (SELECT DECODE (cta.irelatedacctcount, 0, 'N', 'Y')  "+
"     FROM col_trn_accountstatusreport cta "+
"    WHERE     ctr.iagreementseqno = cta.iagreementseqno "+
"  AND ctr.szOrgCode = cta.szOrgCode "+
"  AND ctr.szPartitionCode = cta.szPartitionCode) "+
"     \"Related account Y/N\",  "+
"  ctr.CLIVEPROMISE \"PTP Live Y/N\",   "+
"  ctr.szpaymenttype \"Payment Method\", "+
"  ctr.szmarketsegdesc \"Market Segment\", "+
"  Get_Codedesc ('001', "+
"        szMktCode, "+
"        'COL_MST_SETTINGS', "+
"        'MARKET_CODE', "+
"        'N')   "+
"     \"Market Code Desc\", "+
"  Get_Codedesc ('001', "+
"        szcollectioncode, "+
"        'COL_MST_SETTINGS', "+
"        'COLLECTION_CODE', "+
"        'N')   "+
"     \"Colletion Code Desc\",  "+
"  ctr.szmoccode \"MOC Code\",  "+
"  ctr.fcreditlimit \"Credit Limit\",   "+
"  ctr.mfs02 \"Debt Category\", "+
"  ctr.ioddays \"OD days\", "+
"  ctr.szbucketcode \"Ageing Bucket\",  "+
"  ctr.fosamt \"Total Outstanding\", "+
"  ctr.fbucket0 \"Current\", "+
"  ctr.fbucket1 \"30d\", "+
"  ctr.fbucket2 \"60d\", "+
"  ctr.fbucket3 \"90d\", "+
"  ctr.fbucket4 \"120d\", "+
"  ctr.fbucket5 \"150d\", "+
"  ctr.fbucket6 \"180d\", "+
"  ctr.fbucketamt7 \"210d+\",   "+
"  ctsi.szmsisdn \"MSISDN\", "+
"  ctsi.cstatus \"MSISDN status\", "+
"  ctp.dtactive \"Package Active Date\", "+
"  ctr.szwfcode \"Workflow Code\", "+
"  ctr.szwfstatecode \"Workflow State\", "+
"  ctr.flastpymtamt \"Last Payment Amt\", "+
"  ctr.dtlastpymt \"Date Last Payment\", "+
"  (ctr.isicnt - ctr.ideactivesicnt) \"Non Deact SI cnt\", "+
"  ctr.szcyclecode \"BC\", "+
"  ctr.szidcardno \"IC No\", "+
"  ctr.szoldicno \"OLD IC\", "+
"  cmc.szpassportno \"Passport No\", "+
"  cmc.SZFIELD12 \"Other ID\"   "+
"  FROM col_trn_package ctp, "+
"  col_trn_reportbuilder ctr,   "+
"  col_trn_serviceinstance ctsi, "+
"  col_mst_customer cmc "+
"    WHERE     ctr.szorgcode = '001' "+
"  AND ctr.szorgcode = ctp.szorgcode "+
"  AND ctr.szpartitioncode = ctp.szpartitioncode "+
"  AND ctr.iagreementseqno = ctp.iagreementseqno "+
"      AND ctp.szpackagecode in('41805','41851','41866','41869','41844') "+
"  AND ctp.cstatus = 'A'  "+
"  AND ctp.ipackageseqno > 357647951 "+
"  AND ctp.szorgcode = '001' "+
"  AND ctp.iagreementseqno = ctsi.iagreementseqno "+
"  AND ctp.szorgcode = ctsi.szorgcode   "+
"  AND ctp.szpartitioncode = ctsi.szpartitioncode "+
"  AND ctp.iserviceinstanceseqno = ctsi.iserviceinstanceseqno "+
"  AND ctr.szorgcode = ctsi.szorgcode   "+
"  AND ctr.szpartitioncode = ctsi.szpartitioncode "+
"  AND ctr.iagreementseqno = ctsi.iagreementseqno "+
"  AND cmc.szOrgCode = ctr.szOrgCode "+
"  AND cmc.iCustomerGroupSeqNo = ctr.iCustomerGroupSeqNo "+
"  AND cmc.Szpartitioncode = ctr.Szpartitioncode "+
"  AND cmc.szorgcode = ctp.szorgcode "+
"  AND cmc.szpartitioncode = ctp.szpartitioncode "+
"  AND cmc.szorgcode = ctsi.szorgcode   "+
"  AND cmc.szpartitioncode = ctsi.szpartitioncode "+
" ORDER BY ctp.dtactive DESC    ",


device_finance_report_deactive_query : " SELECT ctr.szagreementno \"Account Number\", "+
"  ctr.szname \"Customer Name\", "+
"  ctr.dtregistration \"Registration Date\", "+
"  Get_Codedesc ('001', "+
"        ctsi.szfield11, "+
"        'COL_MST_PACKAGE', "+
"        'PACKAGE_CODE', "+
"        'N')   "+
"     \"Rate Plan\", "+
"  ctr.cservicestatus \"Account Status\", "+
"   ctr.mfs01 \"Risk Code\", "+
"  (SELECT DECODE (cta.irelatedacctcount, 0, 'N', 'Y')  "+
"     FROM col_trn_accountstatusreport cta "+
"    WHERE     ctr.iagreementseqno = cta.iagreementseqno "+
"  AND ctr.szOrgCode = cta.szOrgCode "+
"  AND ctr.szPartitionCode = cta.szPartitionCode) "+
"     \"Related account Y/N\",  "+
"  ctr.CLIVEPROMISE \"PTP Live Y/N\",   "+
"  ctr.szpaymenttype \"Payment Method\", "+
"  ctr.szmarketsegdesc \"Market Segment\", "+
"  Get_Codedesc ('001', "+
"        szMktCode, "+
"        'COL_MST_SETTINGS', "+
"        'MARKET_CODE', "+
"        'N')   "+
"     \"Market Code Desc\", "+
"  Get_Codedesc ('001', "+
"        szcollectioncode, "+
"        'COL_MST_SETTINGS', "+
"        'COLLECTION_CODE', "+
"        'N')   "+
"     \"Colletion Code Desc\",  "+
"  ctr.szmoccode \"MOC Code\",  "+
"  ctr.fcreditlimit \"Credit Limit\",   "+
"  ctr.mfs02 \"Debt Category\", "+
"  ctr.ioddays \"OD days\", "+
"  ctr.szbucketcode \"Ageing Bucket\",  "+
"  ctr.fosamt \"Total Outstanding\", "+
"  ctr.fbucket0 \"Current\", "+
"  ctr.fbucket1 \"30d\", "+
"  ctr.fbucket2 \"60d\", "+
"  ctr.fbucket3 \"90d\", "+
"  ctr.fbucket4 \"120d\", "+
"  ctr.fbucket5 \"150d\", "+
"  ctr.fbucket6 \"180d\", "+
"  ctr.fbucketamt7 \"210d+\",   "+
"  ctsi.szmsisdn \"MSISDN\", "+
"  ctsi.cstatus \"MSISDN status\", "+
"  ctp.dtactive \"Package Active Date\", "+
"  ctr.szwfcode \"Workflow Code\", "+
"  ctr.szwfstatecode \"Workflow State\", "+
"  ctr.flastpymtamt \"Last Payment Amt\", "+
"  ctr.dtlastpymt \"Date Last Payment\", "+
"  (ctr.isicnt - ctr.ideactivesicnt) \"Non Deact SI cnt\", "+
"  ctr.szcyclecode \"BC\", "+
"  ctr.szidcardno \"IC No\", "+
"  ctr.szoldicno \"OLD IC\", "+
"  cmc.szpassportno \"Passport No\", "+
"  cmc.SZFIELD12 \"Other ID\"   "+
"  FROM col_trn_package ctp, "+
"  col_trn_reportbuilder ctr,   "+
"  col_trn_serviceinstance ctsi, "+
"  col_mst_customer cmc "+
"    WHERE     ctr.szorgcode = '001' "+
"  AND ctr.szorgcode = ctp.szorgcode "+
"  AND ctr.szpartitioncode = ctp.szpartitioncode "+
"  AND ctr.iagreementseqno = ctp.iagreementseqno "+
"      AND ctp.szpackagecode in('41805','41851','41866','41869','41844') "+
"  AND CTP.CSTATUS = 'D' "+
"  AND ctp.ipackageseqno > 357647951 "+
"  AND ctp.szorgcode = '001' "+
"  AND ctp.iagreementseqno = ctsi.iagreementseqno "+
"  AND ctp.szorgcode = ctsi.szorgcode   "+
"  AND ctp.szpartitioncode = ctsi.szpartitioncode "+
"  AND ctp.iserviceinstanceseqno = ctsi.iserviceinstanceseqno "+
"  AND ctr.szorgcode = ctsi.szorgcode   "+
"  AND ctr.szpartitioncode = ctsi.szpartitioncode "+
"  AND ctr.iagreementseqno = ctsi.iagreementseqno "+
"  AND cmc.szOrgCode = ctr.szOrgCode "+
"  AND cmc.iCustomerGroupSeqNo = ctr.iCustomerGroupSeqNo "+
"  AND cmc.Szpartitioncode = ctr.Szpartitioncode "+
"  AND cmc.szorgcode = ctp.szorgcode "+
"  AND cmc.szpartitioncode = ctp.szpartitioncode "+
"  AND cmc.szorgcode = ctsi.szorgcode   "+
"  AND cmc.szpartitioncode = ctsi.szpartitioncode "+
" ORDER BY ctp.dtactive DESC    ",

ageing_report_corporate_query: "SELECT ct.SZAGREEMENTNO \"Account Number\", "+
"ct.SZPARENTID \"Parent account\", "+
"ct.CSERVICESTATUS \"Account Status\", "+
"ct.SZMOBILENO \"Mobile no\",ct.szcyclecode \"Bill Cycle\",   ct.FOSAMT \"Total OS amt\",  ct.FOVERDUEAMT \"Overdue amt\", "+
"(NVL(ct.fosamt,0)-NVL(ct.foverdueamt,0)) \"Current Amount\",        "+
"          chb.fbucket1 \"30 bucket amount\",     "+
"          chb.fbucket2 \"60 bucket amount\",     "+
"          chb.fbucket3 \"90 bucket amount\",     "+
"          chb.fbucket4 \"120 bucket amount\",     "+
"          chb.fbucket5 \"150 bucket amount\",     "+
"          chb.fbucket6 \"180 bucket amount\",      "+
"           chb.fbucket7 \"210 bucket Amount\",    "+
"            chb.fbucket8 \"240 bucket Amount\",    "+
"           chb.fbucket9 \"270 bucket Amount\",    "+
"            chb.fbucket10 \"300 bucket Amount\",    "+
"            chb.fbucket11 \"330 bucket Amount\",     "+
"          chb.fbucket12 \"360 and 360+ bucket amount\",       "+
"ct.SZBUCKETCODE \"Aging\",   nvl(ct.fdepositamt,0) \"Deposit\",  "+
"(select Get_Codedesc('001',ca.szfield14,'COL_MST_CODES','CTSSEGMENT','N') from COL_TRN_AGREEMENT ca "+
"where ca.IAGREEMENTSEQNO=ct.IAGREEMENTSEQNO) \"Industry Segment\", "+
"GET_CODEDESC('001',ct.SZACCOUNTMANAGER,'COL_MST_CODES','ACCMANAGER','N') \"Account Manager\", "+
"GET_CODEDESC('001',ct.SZMKTCODE,'COL_MST_SETTINGS','MARKET_CODE','N') \"Market Code\",   "+
"Get_Codedesc('001',ct.szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N') \"Collection Code\", "+
"ct.SZPRODUCTCODE \"Product Code\",  datetochar(ct.DTACTIVE)  \"Activation Date\", "+
"case(ct.cwriteoff) "+
"WHEN '0' "+
"THEN 'Normal' "+
"WHEN '1' "+
"THEN 'WrittenOff' "+
"WHEN '2' "+
"THEN 'Written Back' "+
"END "+
"\"Writeoff Flag\",   nvl(ct.fwriteoffamt,0) \"Write Off Amount\",   datetochar(ct.dtwriteoff) \"Write off Date\", "+
"nvl(ct.fwriteoffamtrecovered,0) \"Write Back Amount\",   ct.SZCUSTFIELD2 \"Company Name\",   ct.SZNAME \"Name\", "+
"ct.SZBRN \"Company BRN number\",ct.MFS02 \"Debt Category\" "+
"FROM col_trn_reportbuilder ct ,col_hrz_billing chb      "+
"WHERE ct.iagreementseqno=chb.iagreementseqno and ct.SZORGCODE=chb.SZORGCODE and ct.SZPARTITIONCODE=chb.SZPARTITIONCODE     "+
"and ct.mfs03 = 'C'        "+
"and ct.CPAYMENTRESPONSIBLEYN = 'Y'",


ageing_report_govern_query: "SELECT ct.SZAGREEMENTNO \"Account Number\",        "+
"ct.SZPARENTID \"Parent account\",ct.CSERVICESTATUS \"Account Status\",ct.SZMOBILENO \"Mobile no\",  "+
"ct.szcyclecode \"Bill Cycle\",ct.FOSAMT \"Total OS amt\",ct.FOVERDUEAMT \"Overdue amt\",        "+
"(NVL(ct.fosamt,0)-NVL(ct.foverdueamt,0)) \"Current Amount\",        "+
"          chb.fbucket1 \"30 bucket amount\",     "+
"          chb.fbucket2 \"60 bucket amount\",     "+
"          chb.fbucket3 \"90 bucket amount\",     "+
"          chb.fbucket4 \"120 bucket amount\",     "+
"          chb.fbucket5 \"150 bucket amount\",     "+
"          chb.fbucket6 \"180 bucket amount\",      "+
"           chb.fbucket7 \"210 bucket Amount\",    "+
"            chb.fbucket8 \"240 bucket Amount\",    "+
"           chb.fbucket9 \"270 bucket Amount\",    "+
"            chb.fbucket10 \"300 bucket Amount\",    "+
"            chb.fbucket11 \"330 bucket Amount\",     "+
"          chb.fbucket12 \"360 and 360+ bucket amount\",       "+
"ct.SZBUCKETCODE \"Aging\",nvl(ct.fdepositamt,0) \"Deposit\",        "+
"(select Get_Codedesc('001',ca.szfield14,'COL_MST_CODES','CTSSEGMENT','N') from COL_TRN_AGREEMENT ca where ca.IAGREEMENTSEQNO=        "+
"ct.IAGREEMENTSEQNO) \"Industry Segment\",        "+
"GET_CODEDESC('001',ct.SZACCOUNTMANAGER,'COL_MST_CODES','ACCMANAGER','N') \"Account Manager\",        "+
"GET_CODEDESC('001',ct.SZMKTCODE,'COL_MST_SETTINGS','MARKET_CODE','N') \"Market Code\",        "+
"Get_Codedesc('001',ct.szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N') \"Collection Code\",        "+
"ct.SZPRODUCTCODE \"Product Code\", datetochar(ct.DTACTIVE)  \"Activation Date\",        "+
"case(ct.cwriteoff)        "+
"WHEN '0'        "+
"THEN 'Normal'        "+
"WHEN '1'        "+
"THEN 'WrittenOff'        "+
"WHEN '2'        "+
"THEN 'Written Back'        "+
"END        "+
"\"Writeoff Flag\",        "+
"nvl(ct.fwriteoffamt,0) \"Write Off Amount\", datetochar(ct.dtwriteoff) \"Write off Date\",        "+
"nvl(ct.fwriteoffamtrecovered,0) \"Write Back Amount\",ct.SZCUSTFIELD2 \"Company Name\",ct.SZNAME \"Name\",        "+
"ct.SZBRN \"Company BRN number\",ct.MFS02 \"Debt Category\"        "+
"FROM col_trn_reportbuilder ct ,col_hrz_billing chb      "+
"WHERE ct.iagreementseqno=chb.iagreementseqno and ct.SZORGCODE=chb.SZORGCODE and ct.SZPARTITIONCODE=chb.SZPARTITIONCODE     "+
"and ct.mfs03 = 'G'        "+
"and ct.CPAYMENTRESPONSIBLEYN = 'Y'",

ageing_report_sme_query:"SELECT ct.SZAGREEMENTNO \"Account Number\", "+
"ct.SZPARENTID \"Parent account\", "+
"ct.CSERVICESTATUS \"Account Status\", "+
"ct.SZMOBILENO \"Mobile no\",ct.szcyclecode \"Bill Cycle\",   ct.FOSAMT \"Total OS amt\",  ct.FOVERDUEAMT \"Overdue amt\", "+
"(NVL(ct.fosamt,0)-NVL(ct.foverdueamt,0)) \"Current Amount\",  "+
"          chb.fbucket1 \"30 bucket amount\",     "+
"          chb.fbucket2 \"60 bucket amount\",     "+
"          chb.fbucket3 \"90 bucket amount\",     "+
"          chb.fbucket4 \"120 bucket amount\",     "+
"          chb.fbucket5 \"150 bucket amount\",     "+
"          chb.fbucket6 \"180 bucket amount\",      "+
"           chb.fbucket7 \"210 bucket Amount\",    "+
"            chb.fbucket8 \"240 bucket Amount\",    "+
"           chb.fbucket9 \"270 bucket Amount\",    "+
"            chb.fbucket10 \"300 bucket Amount\",    "+
"            chb.fbucket11 \"330 bucket Amount\",     "+
"          chb.fbucket12 \"360 and 360+ bucket amount\",       "+
"ct.SZBUCKETCODE \"Aging\",   nvl(ct.fdepositamt,0) \"Deposit\",  "+
"(select Get_Codedesc('001',ca.szfield14,'COL_MST_CODES','CTSSEGMENT','N') from COL_TRN_AGREEMENT ca "+
"where ca.IAGREEMENTSEQNO=ct.IAGREEMENTSEQNO) \"Industry Segment\", "+
"GET_CODEDESC('001',ct.SZACCOUNTMANAGER,'COL_MST_CODES','ACCMANAGER','N') \"Account Manager\", "+
"GET_CODEDESC('001',ct.SZMKTCODE,'COL_MST_SETTINGS','MARKET_CODE','N') \"Market Code\",   "+
"Get_Codedesc('001',ct.szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N') \"Collection Code\", "+
"ct.SZPRODUCTCODE \"Product Code\",  datetochar(ct.DTACTIVE)  \"Activation Date\", "+
"case(ct.cwriteoff) "+
"WHEN '0' "+
"THEN 'Normal' "+
"WHEN '1' "+
"THEN 'WrittenOff' "+
"WHEN '2' "+
"THEN 'Written Back' "+
"END "+
"\"Writeoff Flag\",   nvl(ct.fwriteoffamt,0) \"Write Off Amount\",   datetochar(ct.dtwriteoff) \"Write off Date\", "+
"nvl(ct.fwriteoffamtrecovered,0) \"Write Back Amount\",   ct.SZCUSTFIELD2 \"Company Name\",   ct.SZNAME \"Name\", "+
"ct.SZBRN \"Company BRN number\",ct.MFS02 \"Debt Category\" "+
"FROM col_trn_reportbuilder ct ,col_hrz_billing chb      "+
"WHERE ct.iagreementseqno=chb.iagreementseqno and ct.SZORGCODE=chb.SZORGCODE and ct.SZPARTITIONCODE=chb.SZPARTITIONCODE     "+
"and ct.mfs03 = 'S'        "+
"and ct.CPAYMENTRESPONSIBLEYN = 'Y'",

home_service_query : "select ctr.szname \"Name\",ctr.SZAGREEMENTNO\"Account No\",  "+
"CASE (ctr.szproductcode)  "+
"WHEN 'F'  "+
"THEN 'Fixed' "+
"WHEN 'I'  "+
"THEN 'ISP' "+
"WHEN 'H'  "+
"THEN 'Hybrid' "+
"END \"Product\",ctr.SZMARKETSEGDESC \"Market segment\",ctr.MFS02\"Debt Category\", "+
"Get_Codedesc(ctr.szOrgCode,ctr.szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N') \"Collection Code Desc\", "+
"ctr.CSERVICESTATUS\"Status\",ctr.FOSAMT\"Outstanding Amount\",ctr.FOVERDUEAMT\"Overdue Amount\",ctr.fbucket0, "+
"ctr.FBUCKET1 \"30d\",ctr.FBUCKET2 \"60d\",ctr.FBUCKET3 \"90d\",   "+
"ctr.FBUCKET4 \"120d\",ctr.FBUCKET5 \"150d\",ctr.FBUCKET6 \"180d\",ctr.FBUCKETAMT7 \"210d+\", "+
"ctr.SZLASTBILLCYCLEBUCKET \"Bucket\",ctr.SZCYCLECODE \"BC\",ctr.szwfcode \"Workflow\" "+
"from COL_TRN_REPORTBUILDER ctr where ctr.SZPRODUCTCODE IN ('I','F','H')    ",

home_services_type_query : " select ctr.szname \"Name\",ctr.SZAGREEMENTNO \"Account No\",   "+
" CASE (ctr.szproductcode)  "+
" WHEN 'F'  "+
" THEN 'Fixed' "+
" WHEN 'I'  "+
" THEN 'ISP' "+
" WHEN 'H'  "+
" THEN 'Hybrid' "+
" END \"Product\",ctr.SZMARKETSEGDESC \"Market segment\",ctr.MFS02\"Debt Category\", "+
" Get_Codedesc(ctr.szOrgCode,ctr.szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N') \"Collection Code Desc\", "+
" ctr.CSERVICESTATUS\"Status\",ctr.FOSAMT\"Outstanding Amount\",ctr.FOVERDUEAMT\"Overdue Amount\",ctr.fbucket0, "+
" ctr.FBUCKET1 \"30d\",ctr.FBUCKET2 \"60d\",ctr.FBUCKET3 \"90d\",   "+
" ctr.FBUCKET4 \"120d\",ctr.FBUCKET5 \"150d\",ctr.FBUCKET6 \"180d\",ctr.FBUCKETAMT7 \"210d+\", ctr.SZLASTBILLCYCLEBUCKET \"Bucket\", "+
" ctr.SZCYCLECODE \"BC\", ctr.szwfcode \"Workflow\",cts.SZMSISDN,case(CTS.IFIELD2)  "+
" WHEN 1028 "+
" THEN 'Z EXPIRED Hotlink Fast' "+
" WHEN 1017 "+
" THEN 'Z EXPIRED New Hotlink Plan 2.0' "+
" WHEN 1034 "+
" THEN 'Hotlink Red' "+
" WHEN 339  "+
" THEN 'MPLS DSL (TMW)' "+
" WHEN 1022 "+
" THEN 'Z EXPIRED Hotlink Globe Kababayan'  "+
" WHEN 4021 "+
" THEN 'M2M IoT Service' "+
" WHEN 340  "+
" THEN 'International Ethernet Private Line (IEPL)' "+
" WHEN 1021 "+
" THEN 'Z EXPIRED Hotlink Pelan Edisi Social' "+
" WHEN 1029 "+
" THEN 'e-Reload Plan' "+
" WHEN 2027 "+
" THEN 'SIP Trunk'  "+
" WHEN 2028 "+
" THEN 'Hosted Contact Center' "+
" WHEN 1033 "+
" THEN 'Z Expired - Hotlink Super 2.0' "+
" WHEN 1032 "+
" THEN 'Xonline' "+
" WHEN 1035 "+
" THEN 'Hotlink Red ECEM'   "+
" WHEN 1014 "+
" THEN 'Z EXPIRED #Hotlink Super IDD' "+
" WHEN 4010 "+
" THEN 'FGSM' "+
" WHEN 344  "+
" THEN 'Integrated Bundle'  "+
" WHEN 1026 "+
" THEN 'Z EXPIRED #Hotlink Kelantan/Terengganu' "+
" WHEN 1011 "+
" THEN 'Prepaid REDtone' "+
" WHEN 1027 "+
" THEN 'Z EXPIRED Tablet Plan' "+
" WHEN 2024 "+
" THEN 'MPLS ISDN - PRI' "+
" WHEN 1015 "+
" THEN 'Z EXPIRED Hotlink Plan 3.0 (EC)' "+
" WHEN 1016 "+
" THEN 'Z EXPIRED EDISI KAMPUS' "+
" WHEN 337  "+
" THEN 'MPLS' "+
" WHEN 4006 "+
" THEN 'HSDPA Service' "+
" WHEN 1001 "+
" THEN 'Z EXPIRED Prepaid Talk Plan' "+
" WHEN 1002 "+
" THEN 'Z EXPIRED Prepaid SMS Plan' "+
" WHEN 1003 "+
" THEN 'Z EXPIRED Prepaid Travellers Pack Service'  "+
" WHEN 1004 "+
" THEN 'Z EXPIRED Prepaid Hotlink Club' "+
" WHEN 2001 "+
" THEN 'EXPIRED - Analogue DID' "+
" WHEN 2003 "+
" THEN 'Centrex Service' "+
" WHEN 2005 "+
" THEN 'Coinphone'  "+
" WHEN 2006 "+
" THEN 'Domestic Freefone 1-800' "+
" WHEN 2007 "+
" THEN 'Inbound Intl 1-800 Service' "+
" WHEN 2008 "+
" THEN 'Inbound Services'   "+
" WHEN 2009 "+
" THEN 'ISDN-PRI'   "+
" WHEN 2010 "+
" THEN 'Localfone 1-300' "+
" WHEN 2011 "+
" THEN 'EXPIRED - MFCR2' "+
" WHEN 2012 "+
" THEN 'PayPhone'   "+
" WHEN 2013 "+
" THEN 'Single Line' "+
" WHEN 2014 "+
" THEN 'USP KTKM'   "+
" WHEN 2016 "+
" THEN 'Value Call' "+
" WHEN 2017 "+
" THEN 'ValueCall Plus' "+
" WHEN 4001 "+
" THEN 'GSM Service' "+
" WHEN 4002 "+
" THEN 'Enterprise SMS Service' "+
" WHEN 4003 "+
" THEN 'MISM Secondary Service' "+
" WHEN 2015 "+
" THEN 'Equal Access' "+
" WHEN 4004 "+
" THEN 'Video Gateway Service' "+
" WHEN 4005 "+
" THEN 'USP Yan Service' "+
" WHEN 2019 "+
" THEN 'Voice Away - ISDN'  "+
" WHEN 2018 "+
" THEN 'Voice Away - Single Line'   "+
" WHEN 2020 "+
" THEN 'VASP - Single Line' "+
" WHEN 2021 "+
" THEN 'VASP - ISDN' "+
" WHEN 1005 "+
" THEN 'Z EXPIRED CLMTT1'   "+
" WHEN 1006 "+
" THEN 'Z EXPIRED Pelan Hotlink EdisiPelancong' "+
" WHEN 301  "+
" THEN 'Maxis Portal' "+
" WHEN 302  "+
" THEN 'Dedicated-Internet Access'  "+
" WHEN 303  "+
" THEN 'Web Hosting' "+
" WHEN 306  "+
" THEN 'Server Co-Location' "+
" WHEN 307  "+
" THEN 'Dedicated Server Hosting'   "+
" WHEN 308  "+
" THEN 'High Speed Internet' "+
" WHEN 309  "+
" THEN 'Domestic Private Leased Circuit' "+
" WHEN 310  "+
" THEN 'International Private Leased Circuit' "+
" WHEN 312  "+
" THEN 'SkyLine VSAT' "+
" WHEN 313  "+
" THEN 'USat' "+
" WHEN 317  "+
" THEN 'SkyStream VSAT' "+
" WHEN 319  "+
" THEN 'VSAT Leased Line Service'   "+
" WHEN 324  "+
" THEN 'Wireless LAN Service' "+
" WHEN 326  "+
" THEN 'IPVPN Lease Line'   "+
" WHEN 327  "+
" THEN 'IPVPN DSL'  "+
" WHEN 328  "+
" THEN 'Professional Service' "+
" WHEN 329  "+
" THEN 'mSAT' "+
" WHEN 330  "+
" THEN 'Wireless Broadband Service' "+
" WHEN 331  "+
" THEN 'MangoDotNet ISP LL Service' "+
" WHEN 332  "+
" THEN 'Skystream Internet VSAT' "+
" WHEN 333  "+
" THEN 'International Private Leased Circuit - OSS' "+
" WHEN 334  "+
" THEN 'DSL Access' "+
" WHEN 335  "+
" THEN 'Broadband Service'  "+
" WHEN 4008 "+
" THEN 'Hosted Email Service' "+
" WHEN 1009 "+
" THEN 'Z EXPIRED Prepaid Basic Plan' "+
" WHEN 4007 "+
" THEN 'USP MCMC Payphone ' "+
" WHEN 1010 "+
" THEN 'Z EXPIRED Prepaid East Malaysia Plan' "+
" WHEN 1007 "+
" THEN 'Z EXPIRED Prepaid USP Plan' "+
" WHEN 2023 "+
" THEN 'Business Voice Service' "+
" WHEN 336  "+
" THEN 'SkyWay VSAT' "+
" WHEN 338  "+
" THEN 'MPLS DPLC'  "+
" WHEN 1008 "+
" THEN 'Z EXPIRED Prepaid Extra Plan' "+
" WHEN 2022 "+
" THEN 'VSAT - Single Line' "+
" WHEN 7000 "+
" THEN 'Integrated Bundle'  "+
" WHEN 1024 "+
" THEN 'Z EXPIRED #Hotlink WM' "+
" WHEN 4018 "+
" THEN'MPLS Wireless Service' "+
" WHEN 1023 "+
" THEN 'Z EXPIRED Kartu As' "+
" WHEN 1031 "+
" THEN 'Z Expired - Hotlink FAST 3.0 EC/EM' "+
" WHEN 1020 "+
" THEN 'Z EXPIRED Special Hotlink Plan2' "+
" WHEN 1025 "+
" THEN 'Z Expired - #Hotlink EM/EC' "+
" WHEN 1018 "+
" THEN 'Z EXPIRED Bagus EM/EC' "+
" WHEN 4019 "+
" THEN 'Virtual GSM Service' "+
" WHEN 4015 "+
" THEN 'UNiTY Centrex - Fixed' "+
" WHEN 4016 "+
" THEN 'UNiTY Virtual (On Net) - Fixed' "+
" WHEN 1013 "+
" THEN 'Z EXPIRED Hotlink Plan' "+
" WHEN 4011 "+
" THEN 'UNiTY Meet' "+
" WHEN 4012 "+
" THEN 'UNiTY Centrex - Mobile' "+
" WHEN 4013 "+
" THEN 'UNiTY Virtual (Off Net)' "+
" WHEN 4014 "+
" THEN 'UNiTY Virtual (On Net) - Mobile' "+
" WHEN 342  "+
" THEN 'FTTH' "+
" WHEN 1030 "+
" THEN 'Z Expired - Hotlink FAST 3.0' "+
" WHEN 2026 "+
" THEN 'Business Voice Enhanced' "+
" WHEN 343  "+
" THEN 'IPTV' "+
" WHEN 4009 "+
" THEN 'Voice2Go'   "+
" WHEN 1012 "+
" THEN 'Z EXPIRED Prepaid Broadband Plan'   "+
" WHEN 6001 "+
" THEN 'MES - Maxis End Solutions'  "+
" WHEN 2029 "+
" THEN 'Maxis Extended IPCC' "+
" WHEN 1019 "+
" THEN 'Z EXPIRED Hotlink Plan 3.0(WM)' "+
" END \"Service Type\" "+
" from COL_TRN_REPORTBUILDER ctr,COL_TRN_SERVICEINSTANCE cts where ctr.SZPRODUCTCODE IN ('I','F','H') "+
" and ctr.iagreementseqno=cts.iagreementseqno and ctr.szpartitioncode=cts.szpartitioncode   "+
" and ctr.szorgcode=cts.szorgcode order by cts.dtactive desc    ",

mbns_astro_report_query : "SELECT ctab.szlegacyagreementno \"Account number\",   "+
"   ctap.szlegacyagreementno \"Parent account ID\", "+
"   ctah.szlegacyagreementno \"Hierarchy Id\", "+
"    ctab.szlegacyagreementno \"Billable Id\", "+
"   cmc.szlname  \"Customer Name\", "+
"   cmc.SZFIELD2 \"Company Name\", "+
" DECODE (ctab.cservicestatus, "+
"  'A', 'ACTIVE', "+
"  'B', 'BARRED', "+
"  'S', 'SUSPENDED',   "+
"  'D', 'DEACTIVE', "+
"  'A' "+
" ) \"Account status\", "+
" ctab.SZCYCLECODE \"Bill Cycle\", "+
"(select datetochar(b.DTACTIVE) from COL_TRN_REPORTBUILDER b where b.IAGREEMENTSEQNO=ctab.IAGREEMENTSEQNO) \"Activation Date\", "+
"(select datetochar(c.DTLASTDEACT ) from COL_TRN_ACCOUNTSTATUSREPORT c where c.IAGREEMENTSEQNO=ctab.IAGREEMENTSEQNO) \"Deactivation Date\", "+
"ctab.szfield15 \"MSISDN\", "+
"  get_codedesc (ctab.szorgcode, "+
"        ctab.szmktcode, "+
"        'COL_MST_SETTINGS',   "+
"        'MARKET_CODE', "+
"        'N'   "+
"       ) \"Market code\", "+
"   get_codedesc (ctab.szorgcode, "+
"        ctab.szfield7, "+
"        'COL_MST_SETTINGS',   "+
"        'COLLECTION_CODE', "+
"        'N'   "+
"       ) \"Collection code\", "+
"      ctab.fosamt \"Total OS Amount\", "+
"       ctab.foverdueamt \"Over Due Amount\",  "+
"       chb.fbucket0 \"Current bucket amount\", chb.fbucket1 \"30 bucket amount\", "+
"chb.fbucket2 \"60 bucket amount\", chb.fbucket3 \"90 bucket amount\", chb.fbucket4 \"120 bucket amount\", chb.fbucket5 \"150 bucket amount\", "+
"chb.fbucket6 \"180 bucket amount\",   "+
"  (  chb.fbucket7 "+
"   + chb.fbucket8 "+
"   + chb.fbucket9 "+
"   + chb.fbucket10 "+
"   + chb.fbucket11 "+
"  ) \"210+ bucket amount\",   "+
"  chb.fbucket12 \"360+ bucket amount\", "+
//"    --DECODE(ctab.CWRITEOFF,'1','Written Off','2','Written Back','Normal') \"Write Off\", "+
"     chf.FWRITEOFFAMT \"Write Off Amt\", "+
"     datetochar(chf.DTWRITEOFF) \"Write off Date\",   "+
"     chf.FWRITEOFFAMTRECOVERED \"Write back amt\", "+
"     (select b.SZCUSTBILLADD from COL_TRN_REPORTBUILDER b where b.IAGREEMENTSEQNO=ctab.IAGREEMENTSEQNO) \"Billing Address\", "+
"     ctab.SZPRODUCTCODE \"Product Code\", "+
"     cmc.SZBRN \"BRN\" "+
"     FROM col_trn_case ctc,   "+
"  col_mst_customer cmc, "+
"  col_hrz_findetails chf, "+
"  col_hrz_billing chb, "+
"  col_trn_agreement ctap, "+
"  col_trn_agreement ctab, "+
"  col_trn_agreement ctah "+
"    WHERE ctab.szorgcode = ctc.szorgcode "+
"      AND ctab.icaseseqno = ctc.icaseseqno "+
"      AND ctab.szpartitioncode = ctc.szpartitioncode  "+
"      AND ctab.szorgcode = cmc.szorgcode "+
"      AND ctab.icustomerseqno = cmc.icustomerseqno "+
"      AND ctab.szpartitioncode = cmc.szpartitioncode  "+
"      AND ctab.szorgcode = chf.szorgcode "+
"      AND ctab.iagreementseqno = chf.iagreementseqno  "+
"      AND ctab.szpartitioncode = chf.szpartitioncode  "+
"      AND ctab.szorgcode = chb.szorgcode "+
"      AND ctab.iagreementseqno = chb.iagreementseqno  "+
"      AND ctab.szpartitioncode = chb.szpartitioncode  "+
"      AND ctab.szorgcode = ctap.szorgcode "+
"      AND ctab.iparentagrseqno = ctap.iagreementseqno "+
"      AND ctab.szpartitioncode = ctap.szpartitioncode "+
"      AND ctab.szorgcode = ctah.szorgcode "+
"      AND ctab.ifield1 = ctah.iagreementseqno "+
"      AND ctab.szpartitioncode = ctah.szpartitioncode "+
"      AND ctab.cpaymentresponsibleyn = 'Y' "+
"      AND ctab.szpartitioncode BETWEEN 0 AND 9 "+
"      AND ctab.szOrgCode = '001' "+
"     and (ctab.szproductcode in ('G','F','I') or ctab.szproductcode is null) AND ",
//and cmc.SZBRN in ('240064A','403472D','418101U','1081077X','518046T','2400064A','994016A','400778V')

dbr_report_query : "select ctr.SZAGREEMENTNO \"Account NO\", chb.fbucket0 \"Current bucket amount\", chb.fbucket1 \"30 bucket amount\", "+
"chb.fbucket2 \"60 bucket amount\", chb.fbucket3 \"90 bucket amount\", chb.fbucket4 \"120 bucket amount\",  "+
"chb.fbucket5 \"150 bucket amount\",chb.fbucket6 \"180 bucket amount\",  "+
"(chb.fbucket7+ chb.fbucket8+ chb.fbucket9+ chb.fbucket10+ chb.fbucket11) \"210+ bucket amount\", "+
"chb.fbucket12 \"360+ bucket amount\",ctr.SZLASTBILLCYCLEBUCKET \"Ageing\", ctr.FOSAMT \"Total OS\",ctr.FOVERDUEAMT \"Total OD\", "+
"ctr.CLIVEPROMISE \"Live PTP()Y/N\",ctr.DTNEXTPROMISE \"PTP Date\", "+
"DECODE (cta.irelatedacctcount, 0, 'N', 'Y') \"Related account\",  "+
"Get_Codedesc(ctr.szOrgCode,ctr.szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N') \"Collection Code Desc\", "+
"get_codedesc (ctr.szorgcode,ctr.szmktcode,'COL_MST_SETTINGS','MARKET_CODE','N') \"Market code\", "+
"ctr.MFS02 \"Debt Category\",CASE (ctr.cservicestatus) "+
"WHEN 'D' "+
"THEN 'Deactive' "+
"WHEN 'S' "+
"THEN 'Suspend' "+
"WHEN 'N' "+
"THEN 'New' "+
"WHEN 'A' "+
"THEN 'Active' "+
"WHEN 'B' "+
"THEN 'Barred' "+
"END \"Account Status\",ctr.szwfcode \"Workflow Code\", ctr.szwfstatecode \"Workflow State\", ctr.szsegmentcode \"Segment Code\" "+
"FROM col_trn_accountstatusreport cta, col_trn_reportbuilder ctr,   col_hrz_billing chb "+
"WHERE ctr.iagreementseqno = cta.iagreementseqno AND ctr.szOrgCode = cta.szOrgCode "+
"AND ctr.szPartitionCode = cta.szPartitionCode and chb.SZORGCODE=ctr.SZORGCODE and chb.IAGREEMENTSEQNO=ctr.IAGREEMENTSEQNO "+
"and chb.SZPARTITIONCODE=ctr.SZPARTITIONCODE  and chb.SZORGCODE=cta.SZORGCODE and chb.IAGREEMENTSEQNO=cta.IAGREEMENTSEQNO "+
"and chb.SZPARTITIONCODE=cta.SZPARTITIONCODE and ",
// ctr.szagreementno IN (Select szaccount_no from acc_dummy1) 

payment_check_new_report :"select ctr.szagreementno \"Account_No\",ctr.fosamt \"Total OS\", ctr.FOVERDUEAMT \"Total OD\", "+
"ctf.DTTRANDATE \"Date\", ctf.FAMOUNT \"Amount\", ctf.cflag3 \"transaction type\" from COL_TRN_FINDETAILS ctf, col_trn_reportbuilder ctr "+
"where ctf.szfield3<>'BULK WRITE-OFF'  and "+
"ctf.IAGREEMENTSEQNO=ctr.IAGREEMENTSEQNO and ctf.sznarration is not null  AND " ,
//ctr.szagreementno IN (select ad.SZACCOUNT_NO from acc_dummy ad) and   
//and trunc(ctf.DTTRANDATE) between '04-APR-2017' and '30-APR-2017' and ctf.sznarration is not null AND 

market_code_report_query : "select SZLEGACYAGREEMENTNO \"account number\" , "+
"case(SZCATEGORY) "+
"when '1' then 'Corporate' "+
"when '4' then 'Consumer' "+
"when '10' then 'Internal' "+
"end \"Kenan Account Category\", "+
"GET_CODEDESC(ctr.szOrgCode,SZMKTCODE,'COL_MST_SETTINGS','MARKET_CODE','N') \"Market Code Desc\" "+
"from col_trn_agreement ctr   "+
"where ",//iagreementseqno in ( Select szaccount_no from acc_dummy)   ",

additional_info_report_query : " SELECT v.CSERVICESTATUS \"Status\",v.SZAGREEMENTNO \"Account Id\",v.SZNAME \"Name\",  "+
" v.SZWOBATCHNO \"Batch No.\",v.SZPRODUCTCODE \"Product\",v.SZCYCLECODE \"Bill Cycle\", "+
" v.SZMARKETSEGMENTDESC \"Market Segment\",v.fOsAmt \"OS Bal\",v.fUnbilledAmt \"Unbilled\", "+
" v.iODDays \"Delq. Days\",v.szBucketCodeDesc \"Bucket\",cta.dtServiceStatus \"Service Status Date\",  "+
" NVL(CTA.fOsAmt, 0) - NVL(CTA.fDepositAmt, 0) \"Net OS\", "+
" (select chb.DTOLDESTUNPAIDBILL from col_hrz_billing chb "+
" where chb.IAGREEMENTSEQNO = v.IAGREEMENTSEQNO "+
" and v.szOrgCode = chb.szOrgCode "+
" and v.szPartitionCode = chb.szPartitionCode) \"Oldest bill outstanding\", "+
" CTA.dtField5 \"Registration Date\",GET_CODEDESC(CTA.szOrgCode,CTA.szField7,'COL_MST_SETTINGS','COLLECTION_CODE','N') \"Collection Code\", "+
" v.MFS02 \"Debt Category\",CMC.SZIDCARDNO \"IC New/Passport No\", "+
" (select CTCE.dtField3 from COL_TRN_CASEEXPOSURE CTCE where v.iAgreementSeqNo = CTCE.icaseseqno "+
" and v.szOrgCode = CTCE.szOrgCode "+
" and v.szPartitionCode = CTCE.szPartitionCode) \"dtLastDeact\", "+
" (select CTCE.dtField2 "+
" from COL_TRN_CASEEXPOSURE CTCE "+
" where v.iAgreementSeqNo = CTCE.icaseseqno "+
" and v.szOrgCode = CTCE.szOrgCode "+
" and v.szPartitionCode = CTCE.szPartitionCode) \"dtLastSusp\", "+
" (select count(1) "+
" from col_trn_serviceinstance cts "+
" where cts.IAGREEMENTSEQNO = v.IAGREEMENTSEQNO "+
" and v.szOrgCode = cts.szOrgCode "+
" and v.szPartitionCode = cts.szPartitionCode) \"No of Lines\", "+
" (select DTLASTPYMT   "+
" from col_hrz_findetails c "+
" where c.IAGREEMENTSEQNO = v.IAGREEMENTSEQNO  "+
" and v.szOrgCode = c.szOrgCode "+
" and v.szPartitionCode = c.szPartitionCode) \"Last Pay Date\" "+
" FROM V_LIST_TELEWOLST V, Col_Trn_Agreement CTA, COL_MST_CUSTOMER CMC "+
" WHERE V.SZORGCODE = '001' "+
" and v.szOrgCode = cta.szOrgCode "+
" AND v.szPartitionCode = cta.szPartitionCode  "+
" AND v.iAgreementSeqNo = cta.iAgreementSeqNo  "+
" and CTA.SZORGCODE = CMC.SZORGCODE "+
" AND CTA.ICUSTOMERSEQNO = CMC.ICUSTOMERSEQNO  "+
" AND ",//V.SZWOBATCHNO in ('B-G-B10-032016','M-F-B10-032016','M-G-B10-032016','M-I-B10-032016')    

dialer_Report_query : " SELECT   ctr.szagreementno AS \"Account No\", COUNT (1) AS \"Count\" "+
"     FROM col_his_activitydetails cta, "+
"     ( select szagreementno,iagreementseqno,szorgcode,szpartitioncode "+
"       from  col_trn_reportbuilder "+
"       where iagreementseqno IN  (SELECT TRUNC (szaccount_no / 10.0) "+
"    FROM acc_dummy) )ctr "+
"    WHERE cta.iagreementseqno = ctr.iagreementseqno "+
"      AND cta.szorgcode = ctr.szorgcode "+
"      AND cta.szpartitioncode = ctr.szpartitioncode "+
"      AND cta.szuserid = 'DIALER' "+
" GROUP BY cta.iagreementseqno, ctr.szagreementno  ",

ptp_report_query : " select ctr.SZAGREEMENTNO as \"Account No\", "+
" ctc.ipromisebroken as \"Total number of broken PTP\","+
" ctc.ipromisefulfilled  as \"Total number of PTP kept\" "+
" from   col_trn_case ctc, col_trn_reportbuilder ctr "+
" where  ctc.IAGREEMENTSEQNO = ctr.IAGREEMENTSEQNO "+
"  and ctc.szorgcode=ctr.szorgcode "+
"  and ctc.szpartitioncode = ctr.szpartitioncode "+
"  and  "//   ctc.IAGREEMENTSEQNO IN (select trunc(SZACCOUNT_NO/10.0) from acc_dummy); "
,


package_component_query_input_column : " select ctr.SZAGREEMENTNO \"Account No\", ctr.SZNAME\"Name\",ctr.FPREVCREDITLIMIT\"Previous Credit Limit\",ctr.FCREDITLIMIT\"Current Credit limit\","+
" (ctr.IACTIVESICNT+CTR.IBARREDSICNT+CTR.ISUSPENDEDSICNT+CTR.IDEACTIVESICNT) \"Numberoflines\",  "+
" ctp.SZPACKAGECODE,CASE (ctr.cservicestatus)\" "+
"    WHEN 'D'\" "+
"    THEN 'Deactive'\" "+
"    WHEN 'S'\" "+
"    THEN 'Suspend'\" "+
"    WHEN 'N'\" "+
"    THEN 'New'\" "+
"    WHEN 'A'\" "+
"    THEN 'Active'\"  "+
"    WHEN 'B'\" "+
"    THEN 'Barred'\"  "+
" END \"Account Status\" ",

package_component_query_tbl_condition: " from col_trn_reportbuilder ctr,COL_TRN_PACKAGE ctp "+
" where ctp.IAGREEMENTSEQNO=ctr.IAGREEMENTSEQNO and ctp.SZORGCODE=ctr.SZORGCODE "+
" and ctr.SZPARTITIONCODE=ctp.SZPARTITIONCODE   AND ",
//ctp.SZPACKAGECODE ='41898' and 


vip_customer_query_tbl_condition : " from col_trn_reportbuilder ctr where ",
//ctp.SZPACKAGECODE ='41898' and 

mkt_collection_query_input_column : "select ctr.szagreementno,GET_CODEDESC(ctr.szOrgCode,ctr.SZMKTCODE,'COL_MST_SETTINGS','MARKET_CODE','N') \"Market Code Desc\", "+
" Get_Codedesc(ctr.szOrgCode,ctr.szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N') \"Collection Code Desc\" ",
 
mkt_collection_query_tbl_condition : " from COL_TRN_REPORTBUILDER ctr where ",

ageing_bucket_input_column : "select ctr.SZAGREEMENTNO \"Account no\",ctr.szname \"Customer name\",ctr.FBUCKET0 \"Current\",ctr.FBUCKET1 \"30d\",ctr.FBUCKET2 \"60d\",ctr.FBUCKET3 \"90d\","+
"ctr.FBUCKET4 \"120d\",ctr.FBUCKET5 \"150d\",ctr.FBUCKET6 \"180d\",ctr.FBUCKETAMT7 \"210d+\",ctr.SZLASTBILLCYCLEBUCKET \"Ageing\","+
"ctr.szMarketSegDesc \"Market Segment\"",

ageing_bucket_tbl_condition : " from COL_TRN_REPORTBUILDER ctr where ",


ddb_status_input_column : "select IAGREEMENTSEQNO,CDDTYPE,DTSTATUS ",

ddb_status_tbl_condition : " from COL_TRN_DIRECTDEBITS where  ",


od_days_amount_input_column : "select  ctr.SZAGREEMENTNO,ctr.ioddays \"Overdue days\",ctr.FOVERDUEAMT \"Total OD Amount\",ctr.IACTIVESICNT \"ActiveSICount\", ctr.IAGEONNETWORK\"Tenure\" ",

od_days_amount_tbl_condition : " from COL_TRN_REPORTBUILDER ctr where   ",


ageing_account_input_column : "SELECT CTR.SZAGREEMENTNO,CTS.SZMSISDN,ctr.FBUCKET0 \"Current\",ctr.FBUCKET1 \"30d\",ctr.FBUCKET2 \"60d\",ctr.FBUCKET3 \"90d\","+
"ctr.FBUCKET4 \"120d\",ctr.FBUCKET5 \"150d\",ctr.FBUCKET6 \"180d\",ctr.FBUCKETAMT7 \"210d+\" , CTR.SZLASTBILLCYCLEBUCKET \"Ageing\" ",

ageing_account_tbl_condition : " FROM COL_TRN_SERVICEINSTANCE CTS,COL_TRN_REPORTBUILDER CTR "+
" WHERE CTR.IAGREEMENTSEQNO=CTS.IAGREEMENTSEQNO "+
" and CTS.SZPARTITIONCODE=CTR.SZPARTITIONCODE and CTS.SZORGCODE=CTR.SZORGCODE and   ",
 //CTS.SZMSISDN IN (SELECT SZACCOUNT_NO FROM ACC_DUMMY1) and

case_exclusion_tbl_condition : " from COL_TRN_REPORTBUILDER ctr, COL_TRN_CASEEXCLUSION ctc where  "+
" ctc.CACTIVEYN='Y' and "+
"((ctc.DTEXCLUDEDTILL)-(ctc.DTEXCLUDEDFROM))>'30' and  ctc.IPRIMARYKEY=ctr.IAGREEMENTSEQNO and ctc.SZORGCODE=ctr.SZORGCODE  "+
" and ctc.SZPARTITIONCODE=ctr.SZPARTITIONCODE" ,


other_common_report_tbl : " from COL_TRN_REPORTBUILDER ctr " ,


other_common_report_condition : " where 1=1 " ,

ageing_report_to_customer :" FROM col_trn_reportbuilder ctr ,col_hrz_billing chb   , "+
"Col_Trn_Agreement cta ,  V_RPT_AGEINGCUSTOMER V "+
"WHERE ctr.iagreementseqno=chb.iagreementseqno "+
"and ctr.SZORGCODE=chb.SZORGCODE and ctr.SZPARTITIONCODE=chb.SZPARTITIONCODE "+
"and   cta.iagreementseqno=chb.iagreementseqno and ctr.CPAYMENTRESPONSIBLEYN = 'Y' and"+
" v.iagreementseqno=chb.iagreementseqno and cta.iagreementseqno=v.iagreementseqno "+
" and v.iagreementseqno=ctr.iagreementseqno and ",

"Account Number":"ctr.SZAGREEMENTNO \"Account Number\"" ,
"Customer Name":"ctr.SZNAME \"Customer Name\"",
"Previous Credit Limit":"ctr.FPREVCREDITLIMIT" ,
"Current Credit limit":"ctr.FCREDITLIMIT",
"Numberoflines":"(ctr.IACTIVESICNT+CTR.IBARREDSICNT+CTR.ISUSPENDEDSICNT+CTR.IDEACTIVESICNT) ",
"Account Status" :"DECODE (ctr.cservicestatus,'D','Deactive','S','Suspended','N','New','A','Active','B','Barred','Unknown') \"Account Status\"" ,
"Product Code":"DECODE(ctr.szproductcode,'G','GSM','F','Fixed','I','ISP','E','Equal Access','H','Hybrid','Others') \"Product Code\"" ,
"Market Segment":"ctr.szmarketsegdesc " ,
"Market Code Desc":"GET_CODEDESC(ctr.szOrgCode,ctr.SZMKTCODE,'COL_MST_SETTINGS','MARKET_CODE','N') \"Market Code Desc\"" ,
"Collection Code Desc":"Get_Codedesc(ctr.szOrgCode,ctr.szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N') \"Collection Code Desc\"" ,
"MOC Code":"ctr.szMOCCODE " ,
"MOC Class":"ctr.MFS04 " ,
"Bucket":"ctr.szlastbillcyclebucket" ,
"Overdue Days":"ctr.ioddays" ,
"Current Amount":"ctr.FBUCKET0" ,
"Aging 30days":"ctr.FBUCKET1" ,
"Aging 60days":"ctr.FBUCKET2" ,
"Aging 90days":"ctr.FBUCKET3" ,
"Aging 120days":"ctr.FBUCKET4" ,
"Aging 150 days":"ctr.FBUCKET5" ,	
"Aging 180 days":"ctr.FBUCKET6" ,
"Aging 210+ days":"ctr.FBUCKETAMT7" ,
"Debt Category":"ctr.MFS02 \"Debt Category\"" ,
"Registration Date":"ctr.dtregistration " ,
"Ageing":"ctr.szlastbillcyclebucket",
"Total OD Amount":"ctr.FOVERDUEAMT \"Total OD Amount\"",		
"ActiveSICount":"ctr.IACTIVESICNT",
"Tenure":"ctr.IAGEONNETWORK",
"Total OD Amount":"ctr.FOVERDUEAMT \"Total OD Amount\"",
"Reason code":"ctc.SZREASONCODE ",
"Live PTP()Y/N":"ctr.CLIVEPROMISE",

"Risk Category":"ctr.MFS01",
"Exposure Amount":"ctr.FEXPOSUREAMT",
"Unbilled Amount":"ctr.FUNBILLEDAMT",
"TotalOustanding Amount":"ctr.FOSAMT",
"Total OS Amount":"ctr.FOSAMT \"Total OS Amount\"",
"Net OS Amount":"ctr.FOSAMT-FDEPOSITAMT",
"Deposit Amount":"ctr.FDEPOSITAMT \"Deposit Amount\"",
"Bill Cycle":"ctr.SZCYCLECODE \"Bill Cycle\"",
"Activation Date":"ctr.DTACTIVE \"Activation Date\"",
"Deactivation Date":"cta.DTLASTDEACT",
"Writeoff Flag":"DECODE(ctr.cwriteoff,'0','Not WrittenOff','1','WrittenOff','2','Written Back','Unknown WriteOff') \"Writeoff Flag\"",
"Write Off Amt":"ctr.FWRITEOFFAMT \"Write Off Amt\"",
"Write off Date":"ctr.DTWRITEOFF \"Write off Date\"",
"Write back amt":"ctr.FWRITEOFFAMTRECOVERED \"Write back amt\"",
"Billing Address":"ctr.SZCUSTBILLADD",
"Exposure %":"ctr.fExposurePerc",
"MIB(Y/N)":"ctr.cmibstatus",
"Payment Method":"ctr.SZPAYMENTTYPE",
"Last Payment Date":"ctr.DTLASTPYMT \"Last Payment Date\"",
"Last Payment Amount":"ctr.FLASTPYMTAMT \"Last Payment Amount\"",
"Workflow State":"ctr.SZWFSTATECODE",
"Workflow code":"ctr.SZWFCODE",
"Bucket":"ctr.SZBUCKETCODE \"Bucket\"",
"Collector Code":"ctr.SZCOLLECTORCODE",
"Collector Group":"ctr.SZCOLLECTORGRPCODE",
"Total SI Count":"ctr.ISICNT",
"Total Barred SI Count":"ctr.IBARREDSICNT",
"Total Suspended SI Count":"ctr.ISUSPENDEDSICNT",
"Total Deactivated SI Count":"ctr.IDEACTIVESICNT",
"NEW IC NO":"ctr.SZIDCARDNO",
"OLD IC No":"ctr.SZOLDICNO",
"Payment Responsible ":"ctr.CPAYMENTRESPONSIBLEYN",
"Last Dishonor Cheque No":"ctr.SZLASTCHQBOUNCENO",
"Last Dishonor Cheque Date":"ctr.DTLASTDISHONOURED",
"Last DD Reject Amount":"ctr.FLASTDDREJECTEDAMT",
"Last DD Reject Date":"ctr.DTLASTDDREJECT",
"Last Bill Date":"ctr.DTLASTBILL",
"Last Bill Amount":"ctr.FLASTBILLAMT",
"Avg Usage(Last 3 months)":"ctr.FAVGREVENUE",
"Avg Usage(Last 12 months)":"ctr.FAVGYEARREVENUE",
"Total Bill Amount":"ctr.FTOTALINVOICEAMT",
"Last Promise Date":"ctr.DTLASTPROMISETAKEN",
"Last Promise Amount":"ctr.FLASTPROMISEAMT",
"Live Promise Date":"ctr.DTNEXTPROMISE",
"Live Promise Amount":"ctr.FNEXTPROMISEAMT",
"Segment Code":"ctr.szsegmentcode",
"BarredLines" : "ctr.IBARREDSICNT",
"Zerolution Flag":"ctc.CZEROLUTIONFLAG",
"Zerolution Date":"ctc.DTZEROLUTIONDATE",
"Company Name":"cmc.SZFIELD2",
"BRN":"cmc.SZBRN",
"Related account Y/N":"DECODE (cta.irelatedacctcount, 0, 'N', 'Y')",
"Pref MSISDN":"ctr.szmobileno",

"Package ID/Code":"ctp.SZPACKAGECODE",
"Type":"CDDTYPE",
"Status Date":"DTSTATUS",
"MSISDN":"CTS.SZMSISDN",
"Case Start date":"ctc.DTEXCLUDEDFROM",
"Case End date":"ctc.DTEXCLUDEDTILL",
"Creator":"ctc.SZUSERID",
"Account No":"IAGREEMENTSEQNO" ,
"Kenan Account No":"ctr.IAGREEMENTSEQNO",
"CircuitID":"getPositionValue(V.szSIDetails, 'CID') || '/' || getPositionValue(V.szSIDetails, 'MID') \"CircuitID\"",
"iPointASILevel":"getPositionValue(V.szSIDetails, 'PLA') \"iPointASILevel\"",
"iPointBSILevel":"getPositionValue(V.szSIDetails, 'PLB') \"iPointBSILevel\"",
"SiteName":"getPositionValue(V.szSIDetails, 'SN') \"SiteName\"",
"Msisdn":"getPositionValue(V.szSIDetails, 'MN') \"Msisdn\"",
"PackageDesc":"getPositionValue(V.szSIDetails, 'PID') \"PackageDesc\"",
"Mobile no":"ctr.szmobileno \"Mobile no\"",
"Current Amt":"(NVL(ctr.fosamt,0)-NVL(ctr.foverdueamt,0)) \"Current Amt\"",
"Current Invoice No":"SUBSTR(chb.SZBUCKET0BILLREF,1,9) \"Current Invoice No\"",
"30 bucket amt":"chb.fbucket1 \"30 bucket amt\"",
"30bucket Invoice No":"SUBSTR(chb.SZBUCKET1BILLREF,1,9) \"30bucket Invoice No\"",
"60 bucket amt":"chb.fbucket2 \"60 bucket amt\"",
"60bucket Invoice No":"SUBSTR(chb.SZBUCKET2BILLREF,1,9) \"60bucket Invoice No\"",
"90 bucket amt":"chb.fbucket3 \"90 bucket amt\"",
"90bucket Invoice No":"SUBSTR(chb.SZBUCKET3BILLREF,1,9) \"90bucket Invoice No\"",
"120 bucket amt":"chb.fbucket4 \"120 bucket amt\"",
"120bucket Invoice No":"SUBSTR(chb.SZBUCKET4BILLREF,1,9) \"120bucket Invoice No\"",
"150 bucket amt":"chb.fbucket5 \"150 bucket amt\"",
"150bucket Invoice No":"SUBSTR(chb.SZBUCKET5BILLREF,1,9) \"150bucket Invoice No\"",
"180 bucket amt":"chb.fbucket6 \"180 bucket amt\"",
"180bucket Invoice No":"SUBSTR(chb.SZBUCKET6BILLREF,1,9) \"180bucket Invoice No\"",
"210 bucket amt":"chb.fbucket7 \"210 bucket amt\"",
"210bucket Invoice No":"SUBSTR(chb.SZBUCKET7BILLREF,1,9) \"210bucket Invoice No\"",
"240 bucket amt":"chb.fbucket8 \"240 bucket amt\"",
"240bucket Invoice No":"SUBSTR(chb.SZBUCKET8BILLREF,1,9) \"240bucket Invoice No\"",
"270 bucket amt":"chb.fbucket9 \"270 bucket amt\"",
"270bucket Invoice No":"SUBSTR(chb.SZBUCKET9BILLREF,1,9) \"270bucket Invoice No\"",
"300 bucket amt":"chb.fbucket10 \"300 bucket amt\"",
"300bucket Invoice No":"SUBSTR(chb.SZBUCKET10BILLREF,1,9) \"300bucket Invoice No\"",
"330 bucket amt":"chb.fbucket11 \"330 bucket amt\"",
"360 and 360+ bucket amt":"chb.fbucket12 \"360 and 360+ bucket amt\"",
"Parent account":"ctr.SZPARENTID \"Parent account\"",
"Industry Segment":"(select Get_Codedesc('001',ca.szfield14,'COL_MST_CODES','CTSSEGMENT','N') from COL_TRN_AGREEMENT ca where ca.IAGREEMENTSEQNO=ctr.IAGREEMENTSEQNO)as \"Industry Segment\"",
"Account Manager":"GET_CODEDESC('001',ctr.SZACCOUNTMANAGER,'COL_MST_CODES','ACCMANAGER','N') \"Account Manager\"",
"Company Name":"ctr.SZCUSTFIELD2 \"Company Name\"" ,
"Company BRN number":"ctr.SZBRN \"Company BRN number\"",
"Date Service Status":"V.DTSERVICESTATUS \"Date Service Status\"",

dmsk_monthly_uccs_ageing_report_query : "SELECT DISTINCT ct.SZAGREEMENTNO \"Account Number\", ct.SZPARENTID \"Parent account\", ct.szname \"Company Name\",		"+
"(SELECT TO_CHAR(ctas.dtservicestatus, 'YYYY-MM-DD HH24:MI:SS') FROM col_trn_agrstatus ctas 		"+
"WHERE ct.iagreementseqno = ctas.iagreementseqno  AND ct.szorgcode = ctas.szorgcode AND ct.szpartitioncode = ctas.szpartitioncode) \"Account Status\",		"+
"(SELECT ctas.cservicestatus FROM col_trn_agrstatus ctas WHERE ct.iagreementseqno = ctas.iagreementseqno  		"+
"AND ct.szorgcode = ctas.szorgcode AND ct.szpartitioncode = ctas.szpartitioncode) \"Last Status change\",		"+
"ctp.SZPACKAGECODE\"Package Code\",		"+
"(SELECT cmp.szpackagedesc FROM col_mst_package cmp WHERE ctp.szpackagecode = cmp.szpackagecode  AND ctp.szorgcode = cmp.szorgcode ) \"Package Desc\",		"+
"ct.SZRATEPLAN \"Rate plan\", ct.SZMOBILENO \"Mobile no\", ct.szcyclecode \"Bill Cycle\", ct.FOSAMT \"Total OS amt\",		"+
"ct.FOVERDUEAMT \"Overdue amt\", (NVL(ct.fosamt,0)-NVL(ct.foverdueamt,0)) \"Current Amount\", ct.fbucket1 \"30 bucket amount\",		"+
"ct.fbucket2 \"60 bucket amount\", ct.fbucket3 \"90 bucket amount\", ct.fbucket4 \"120 bucket amount\",		"+
"ct.fbucket5 \"150 bucket amount\", ct.fbucket6 \"180 bucket amount\", ct.fbucketamt7 \"180+ bucket Amount\",		"+
"(select Get_Codedesc('001',ca.szfield14,'COL_MST_CODES','CTSSEGMENT','N') from COL_TRN_AGREEMENT ca where ca.IAGREEMENTSEQNO =		"+
"ct.IAGREEMENTSEQNO) \"Industry Segment\", GET_CODEDESC('001',ct.SZACCOUNTMANAGER,'COL_MST_CODES','ACCMANAGER','N') \"Account Manager\",		"+
"GET_CODEDESC('001',ct.SZMKTCODE,'COL_MST_SETTINGS','MARKET_CODE','N') \"Market Code\",		"+
"Get_Codedesc('001',ct.szcollectioncode,'COL_MST_SETTINGS','COLLECTION_CODE','N') \"Collection Code\",		"+
"ct.SZPRODUCTCODE \"Product Code\", datetochar(ct.DTACTIVE) \"Activation Date\",		"+
"case(ct.cwriteoff)		"+
"WHEN '0'		"+
"THEN 'Normal'		"+
"WHEN '1'		"+
"THEN 'WrittenOff'		"+
"WHEN '2'		"+
"THEN 'Written Back'		"+
"END		"+
"\"Writeoff Flag\",		"+
"nvl(ct.fwriteoffamt,0) \"Write Off Amount\", datetochar(ct.dtwriteoff) \"Write off Date\", nvl(ct.fwriteoffamtrecovered,0) \"Write Back Amount\",		"+
"ct.SZCUSTFIELD2 \"Company Name\", ct.SZNAME \"Customer Name\", ct.SZBRN \"Company BRN number\", ct.MFS02 \"Debt Category\",		"+
"ct.DTLASTPYMT\"Last payment date\",ct.FLASTPYMTAMT\"Last payment amount\" FROM col_trn_reportbuilder ct ,COL_TRN_PACKAGE ctp		"+
"WHERE 1=1 and ct.iagreementseqno=ctp.iagreementseqno and ct.SZORGCODE=ctp.SZORGCODE and ct.SZPARTITIONCODE=ctp.SZPARTITIONCODE		"+
"and ct.mfs03 in ('S','G','C')		"+
"and ct.CPAYMENTRESPONSIBLEYN = 'Y' and ctp.SZPACKAGECODE in ('6175', '6176', '6177', '6178' ) and ctp.cstatus = 'A'",

eCommerce_monthly_uccs_ageing_report_query:  " SELECT DISTINCT ct.szname \"COMPANY NAME\", ct.szbrn \"COMPANY BRN NO.\", ct.szparentid \"PARENT ACCOUNT\", ct.szagreementno \"BILL ACCOUNT NO.\", 	"+
"(SELECT TO_CHAR(ctas.dtservicestatus,'YYYY-MM-DD HH24:MI:SS') FROM col_trn_agrstatus ctas WHERE ct.iagreementseqno = ctas.iagreementseqno	"+
" AND   ct.szorgcode = ctas.szorgcode AND   ct.szpartitioncode = ctas.szpartitioncode) \"ACCOUNT STATUS\", ctp.szpackagecode \"PACKAGE ID\",	"+
" ct.szrateplan \"SUBSCRIBER_RATEPLAN\", ct.szmobileno \"MOBILE NO.\", ct.szcyclecode \"BILL CYCLE\", ct.fosamt \"TOTAL OS AMOUNT\", 	"+
" ct.foverdueamt \"TOTAL OD AMOUNT\", (nvl(ct.fosamt,0) - nvl(ct.foverdueamt,0) ) \"CURRENT AMOUNT\", chb.fbucket1 \"30 BUCKET AMOUNT\", chb.fbucket2 \"60 BUCKET AMOUNT\",	"+
" chb.fbucket3 \"90 BUCKET AMOUNT\", chb.fbucket4 \"120 BUCKET AMOUNT\", chb.fbucket5 \"150 BUCKET AMOUNT\", chb.fbucket6 \"180 BUCKET AMOUNT\",	"+
" chb.fbucket7 \"210 BUCKET AMOUNT\", chb.fbucket8 \"240 BUCKET AMOUNT\", chb.fbucket9 \"270 BUCKET AMOUNT\", chb.fbucket10 \"300 BUCKET AMOUNT\",	"+
" chb.fbucket11 \"330 BUCKET AMOUNT\", chb.fbucket12 \"360 BUCKET AMOUNT\",	"+
" (SELECT cmp.szpackagedesc FROM col_mst_package cmp WHERE ctp.szpackagecode = cmp.szpackagecode AND   ctp.szorgcode = cmp.szorgcode) \"PACKAGE DESC\",	"+
" ct.dtlastpymt \"LAST PAYMENT DATE\", ct.flastpymtamt \"LAST PAYMENT AMOUNT\",	"+
" (SELECT ca.dtservicestatus FROM col_trn_agreement ca WHERE ca.iagreementseqno = ct.iagreementseqno) \"DATE SERVICE STATUS\"	"+
" FROM col_trn_reportbuilder ct,col_trn_package ctp,col_hrz_billing chb WHERE 1 = 1 AND   ct.iagreementseqno = ctp.iagreementseqno	"+
" AND   ct.szorgcode = ctp.szorgcode AND   ct.szpartitioncode = ctp.szpartitioncode AND   ct.iagreementseqno = chb.iagreementseqno	"+
" AND   ct.szorgcode = chb.szorgcode AND   ct.szpartitioncode = chb.szpartitioncode AND   ctp.szpackagecode IN ( '6183','6185','6113','6112',	"+
" '6114','6157','6098','6077','6091','6193','6117','6076','6090','6100','6097','6099','6101','6158','6080','6095','6079','6116','6115',	"+
" '6075','6094','6118','6074','6159','6166','6167', '6168','6169','6170','6171','6172','6173') AND ctp.DTACTIVE > (sysdate-35) AND ctp.DTACTIVE < (sysdate-5) AND ct.fosamt >0 	"

}