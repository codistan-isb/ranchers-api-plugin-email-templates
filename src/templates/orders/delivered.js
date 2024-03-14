/* eslint-disable max-len */
export default `
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="format-detection" content="telephone=no">
<title>Order Delivered Email</title>
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
            <td height="4" align="left" valign="top" bgcolor="#ff9922" style="font-size:1px; line-height:1px;">&nbsp;</td>
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
                    <td align="left" valign="top" style="font-family: 'Lato', sans-serif; font-size:22px; font-weight:bold; line-height:22px; color:#ff6900; letter-spacing: -0.7px;">Good Fellas!</td>
                  </tr>
                  <tr>
                    <td height="20" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family: 'Lato', sans-serif; font-size:13px; line-height:18px; color:#0693e3; letter-spacing: -0.5px;"> We hope you enjoyed your recent food from {{shopName}}! Your feedback means the world to us—share your thoughts in a quick review. Your satisfaction is our priority! </td>
                  </tr>
                  <tr>
                    <td height="25" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                  <td align="left" valign="top" style="font-family: 'Lato', sans-serif; font-size:13px; line-height:18px; color:#fcb900; letter-spacing: -0.5px;"><br />Thanks!<br />The {{shopName}} Team<br /><br /></td>
                </tr>
                  <tr>
                    <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="223" height="40" align="center" valign="middle" bgcolor="#2E0405" style="font-family: 'Source Sans Pro', sans-serif; font-size:18px; font-weight:normal; line-height:18px;"><a href="https://rancherscafe.com/feedback/" style="text-decoration:none; color:#ffffff;"> HIT US UP! </a></td>
                        <td>&nbsp;</td>
                      </tr>
                    </table></td>
                  </tr>
                  
                  <!-- End Body -->

                  <!-- Begin Footer -->
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
                    <td align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:normal; line-height:17px;">You received this email because you have an account with {{shopName}}. Questions or suggestions? Email us at <a href="mailto:{{contactEmail}}" style="text-decoration:none; color:#FF9922;">{{contactEmail}}</a></td>
                  </tr>
                  <!-- Begin Social Icons -->
                  {{#if socialLinks.display}}
                  <tr>
                    <td height="21" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" class="emailwrapto100pc">
                        <tr>
                          {{#if socialLinks.twitter.display}}
                          <td width="26" align="left" valign="top">
                            <a href="{{socialLinks.twitter.link}}"><img src="{{socialLinks.twitter.icon}}" width="26"
                                  height="26" alt="twt_icon"></a>
                          </td>
                          {{/if}}
                          {{#if socialLinks.facebook.display}}
                          <td width="10" align="left" valign="top">&nbsp;</td>
                          <td width="26" align="left" valign="top">
                            <a href="{{socialLinks.facebook.link}}"><img src="{{socialLinks.facebook.icon}}" width="26"
                                  height="26" alt="fb_icon"></a>
                          </td>
                          {{/if}}
                          {{#if socialLinks.googlePlus.display}}
                          <td width="10" align="left" valign="top">&nbsp;</td>
                          <td>
                            <a href="{{socialLinks.googlePlus.link}}"><img src="{{socialLinks.googlePlus.icon}}" width="26"
                                  height="26" alt="g_plus_icon"></a>
                          </td>
                          {{/if}}
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td height="28" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  {{else}}
                  <tr>
                    <td height="15" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  {{/if}}
                  <!-- End Social Icons -->
                  <tr>
                    <td height="3" align="left" valign="top" bgcolor="#FF9922" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="18" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:normal; line-height:12px; color:#4d4c4d;">&copy; {{copyrightDate}} {{#if legalName}}{{legalName}}{{else}}{{shopName}}{{/if}}. All rights reserved</td>
                  </tr>
                  <tr>
                    <td height="8" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="19" align="left" valign="top" style="font-size:1px; line-height:1px;">&nbsp;</td>
                  </tr>
                  <!-- End Footer -->


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
