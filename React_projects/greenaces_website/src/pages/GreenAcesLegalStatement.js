import React from 'react';
import LegalStatementPage from  '../styles/LegalStatement.module.css';
import { Helmet } from 'react-helmet';




function LegalStatement()  {



  
  return (<React.Fragment>

    <Helmet>
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>GreenAces | Legal Statement</title>
    </Helmet>

    <div className={LegalStatementPage.privacyPolicyScrollable}>
    <div className={LegalStatementPage.background}>
    <p className={LegalStatementPage.MainText01}>
    <h2 ClassName={LegalStatementPage.Header1}>Legal Statement</h2> <br></br>
    This statement applies to the GreenAces and all pages and content within the website. By accessing and using the GreenAces, 
    you agree to the terms and conditions outlined in this statement. <br></br><br></br>
    <h2 ClassName={LegalStatementPage.Header2}>Disclaimer of Liability</h2> <br></br>
    GreenAces and its owners, operators, employees, agents, and affiliates are not responsible for any loss or damage to your 
    computer or other device that may occur as a result of accessing or using the GreenAces. This includes, but is not limited to, 
    loss or damage to your computer or device due to viruses, malware, or other harmful software or materials that may be present 
    on the GreenAces website. <br></br><br></br>
    <h2 ClassName={LegalStatementPage.Header3}>Refund Policy</h2> <br></br>
    If you make a purchase on the GreenAces website and are not satisfied with your purchase, you may be eligible for a refund 
    within 7 days of your purchase as long as you can confirm your purchase. Refunds will be processed as quickly as possible, 
    but please allow up to 7 business days for your refund to be processed.
    Changes to this Statement
    GreenAces reserves the right to make changes to this statement at any time. Your continued use of the GreenAces website after 
    changes have been made constitutes your acceptance of the changes. <br></br> <br></br>
    <h2 ClassName={LegalStatementPage.Header4}>Contact Us</h2><br></br>
    If you have any questions about this statement or the GreenAces website, please contact us at [greenaces@greenaces.site].
    By accessing and using the GreenAces, you acknowledge that you have read, understand, and agree to the terms and conditions 
    outlined in this statement. <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </p>
    </div>
    </div>
   
    



    
  </React.Fragment>) 


};

export default LegalStatement;