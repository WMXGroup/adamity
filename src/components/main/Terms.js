import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
  spacer: {
    height: '75px',
  },
})

class Terms extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Grid container className={classes.spacer}>
        </Grid>
        <div>
          <h1>
            Terms and Conditions:
          </h1>
          <h3>
            1  Acceptance The Use Of Adamilty.com Terms and Conditions
          </h3>
          <p>
            Your access to and use of Adamity.com is subject exclusively to these Terms and Conditions. 
            You will not use the website for any purpose that is unlawful or prohibited by these Terms and Conditions. 
            By using the website you are fully accepting the terms, conditions and disclaimers contained in this notice. 
            If you do not accept these Terms and Conditions you must immediately stop using the Website.
          </p>
          <h3>
            2  Change of Use
          </h3>
          <p>
            Adamity.com reserves the right to:
          </p>
          <p>
            2.1  change or remove (temporarily or permanently) the wWebsite or any part of it without notice and you confirm that adamity.com shall not be liable
            to you for any such change or removal and.
          </p>
          <p>
            2.2  change these Terms and Conditions at any time, and your continued use of the Website following any changes shall be deemed to be your acceptance of such change.
          </p>
          <h3>
            3  Copyright
          </h3>
          <p>
            3.1  All copyright, trade marks and all other intellectual property rights in the website and its content (including without limitation the website design, 
            text, graphics and all software and source codes connected with the website) are owned by or licensed to Adamity.com or otherwise used by Adamity.com 
            as permitted by law.
          </p>
          <p>
            3.2  In accessing the website you agree that you will access the content solely for your personal, non-commercial use. 
            None of the content may be downloaded, copied, reproduced, transmitted, stored, sold or distributed without the prior written consent of 
            the copyright holder. This excludes the downloading, copying and/or printing of pages of the Website for personal, non-commercial home use only.
          </p>
          <h3>
            4  Disclaimers and Limitation of Liability
          </h3>
          <p>
            4.1  The website is provided on an AS IS and AS AVAILABLE basis without any representation or endorsement made and without warranty of any kind 
            whether express or implied, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, 
            compatibility, security and accuracy.
          </p>
          <p>
            4.2  To the extent permitted by law, Adamity.com will not be liable for any indirect or consequential loss or damage whatever (including without limitation loss 
            of business, opportunity, data, profits) arising out of or in connection with the use of the Website.
          </p>
          <p>
            4.3  Adamity.com makes no warranty that the functionality of the Website will be uninterrupted or error free, that defects will be corrected or that the Website 
            or the server that makes it available are free of viruses or anything else which may be harmful or destructive.
          </p>
          <p>
            4.4  Nothing in these Terms and Conditions shall be construed so as to exclude or limit the liability of Adamity.com for death or personal injury as a result of 
            the negligence of Adamity.com or that of its employees or agents.          
          </p>
          <h3>
            5. Links to Third Party Websites
          </h3>
          <p>
            Adamity.com is not responsible for the actions or failures of any third parties. Adamity.com Website may include links to third party websites 
            that are controlled and maintained by others. Any link to other websites is not an endorsement of such websites and you acknowledge and agree that 
            we are not responsible for the content or availability of any such sites.
          </p>
          <h3>
            6. Idemnity
          </h3>
          <p>
            You agree to indemnify and hold Adamity.com and its employees and agents harmless from and against all liabilities, legal fees, damages, losses, costs 
            and other expenses in relation to any claims or actions brought against Adamity.com arising out of any breach by you of these Terms and Conditions or 
            other liabilities arising out of your use of this Website.
          </p>
          <h3>
            7. Severance
          </h3>
          <p>
            If any of these Terms and Conditions should be determined to be invalid, illegal or unenforceable for any reason by any court of competent jurisdiction then 
            such Term or Condition shall be severed and the remaining Terms and Conditions shall survive and remain in full force and effect and continue to be binding 
            and enforceable.
          </p>
          <h3>
            8. Waiver
          </h3>
          <p>
            If you breach these Conditions of Use and we take no action, we will still be entitled to use our rights and remedies in any other situation where you 
            breach these Conditions of Use.
          </p>
          <h3>
            9. Governing Law
          </h3>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the law of united states and you hereby submit to the exclusive 
            jurisdiction of the united states courts.
          </p>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Terms);