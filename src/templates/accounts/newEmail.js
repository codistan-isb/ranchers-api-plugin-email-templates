/* eslint-disable max-len */
export default `
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="format-detection" content="telephone=no">
<title>Basic Email</title>
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
            <td height="4" align="left" valign="top" bgcolor="#1999dd" style="font-size:1px; line-height:1px;">&nbsp;</td>
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
                    <td align="left" valign="top">
                    <a href="#"><img src="{{emailLogo}}" width="49" height="49" alt="logo"></a></td>
                  </tr>
                  <tr>
                    <td height="32" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <!-- End Header -->

                  <!-- Begin Body -->
                  <tr>
                    <td align="left" valign="top" style="font-family: 'Lato', sans-serif; font-size:22px; font-weight:bold; line-height:22px; color:#1e98d5; letter-spacing: -0.7px;">Hi,</td>
                  </tr>
                  <tr>
                    <td height="20" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family: 'Lato', sans-serif; font-size:13px; line-height:18px; color:#4d4d4d; letter-spacing: -0.5px;">Your OTP for reset password is as follow </td>
                  </tr>
                  <tr>
                    <td height="25" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                         <td  align="center" valign="middle" style="font-family: 'Source Sans Pro', sans-serif; font-size:18px; font-weight:normal; line-height:18px;"><p>{{confirmationUrl}}</p></td>
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
                    <td align="left" valign="top" style="font-family: 'Lato', sans-serif; font-size:13px; line-height:18px; color:#4d4d4d; letter-spacing: -0.5px;">Thanks!<br />The Rancher's Cafe Team</td>
                  </tr>
                  <!-- End Body -->
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
