/* eslint-disable max-len */
export default `
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="format-detection" content="telephone=no">
<title>OTP Email for Password</title>
<link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<style type="text/css">
a[href^=tel] { color: inherit; text-decoration: none; }
a img { border:0; outline:0;}
img { border:0; outline:0;}

/* Outlook link fix */
#outlook a {padding:0;}
/* Hotmail background &amp; line height fixes */
.ExternalClass {width:100% !important;}
.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font,
.ExternalClass td, .ExternalClass div {line-height: 100%;}
/* Image borders &amp; formatting */
img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic; margin:0 0 0 0 !important;}
a img {border:none; margin:0 0 0 0 !important;}
/* Re-style iPhone automatic links (eg. phone numbers) */
.applelinks a {color:#222222; text-decoration: none;}
/* Hotmail symbol fix for mobile devices */
.ExternalClass img[class^=Emoji] { width: 10px !important; height: 10px !important; display: inline !important; }
.tpl-content { display:inline !important;}

/* Media Query for mobile */
@media screen and (max-width: 600px) {
table[class=wrap1001], td[class=wrap1001] { width:96% !important; margin:0 !important;}
}
</style>
</head>

<body style="margin:0; padding:0;">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center" valign="middle">
    <table width="600" class="wrap1001" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="left" valign="top" bgcolor="#ffffff"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td height="4" align="left" valign="top" bgcolor="#ff6900" style="font-size:1px; line-height:1px;">&nbsp;</td>
          </tr>
          <tr>
            <td align="center" valign="top"><table width="480" class="wrap1001" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td><table width="100%" border="0" cellspacing="0" cellpadding="0">

                  <!-- Begin Header -->
                  <tr>
                    <td height="34" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  
                  <tr>
                    <td height="32" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <!-- End Header -->

                  <!-- Begin Body -->
                  <tr>
                    <td align="left" valign="top" style="font-family: 'Lato', sans-serif; font-size:22px; font-weight:bold; line-height:22px; color:#fcb900; letter-spacing: -0.7px;">Good Fellas,</td>
                  </tr>
                  <tr>
                    <td height="20" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family: 'Lato', sans-serif; font-size:13px; line-height:18px; color:#E0B252; letter-spacing: -0.5px;">Your OTP for Password verification is as follow </td>
                  </tr>
                  <tr>
                    <td height="25" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                         <td  align="center" valign="middle" style="font-family: 'Source Sans Pro', sans-serif; font-size:24px; font-weight:normal; line-height:18px; color:#661111;"><p><strong>{{confirmationUrl}}</strong></p></td>
                        <td>&nbsp;</td>
                      </tr>
                    </table></td>
                  </tr>
                  <tr>
                    <td height="20" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="20" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family: 'Lato', sans-serif; font-size:13px; line-height:18px; color:#459647; letter-spacing: -0.5px;">Thanks!<br />The Rancher's Cafe Team</td>
                  </tr>
                  <!-- End Body -->
                  <tr>
                    <td height="32" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="1" align="left" valign="middle" bgcolor="#e2e2e2" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="15" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:normal; line-height:17px; color:#459647;">You received this email because you have an account with {{shopName}}. Questions or suggestions? Email us at <a href="mailto:{{contactEmail}}" style="text-decoration:none; color:#661111;">{{contactEmail}}</a></td>
                  </tr>
                </table></td>
              </tr>
            </table></td>
          </tr>
        </table></td>
      </tr>
    </table>
    </td>
  </tr>
</table>

</body>
`;
