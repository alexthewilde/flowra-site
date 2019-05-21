import React from 'react'
import Link from 'gatsby-link'

import './tos.scss';

const TOS = () => (
  <div id="tos" className="terms">
    <div className="logo-wrapper">
      <svg
        className="logo"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={228.25}
        height={51}
        viewBox="0 0 228.25 51"
      >
        <g fill="#FFF" stroke="#FFF" strokeMiterlimit={10}>
          <path id="text" d="M66.523 47.25V23.551h-4.919v-6.54h4.919v-1.5c0-4.62.96-7.08 3.3-8.939 1.62-1.32 4.08-1.98 7.5-1.98 1.2 0 2.22.06 3.12.24v6.18c-.54-.18-1.5-.3-2.76-.3-2.7 0-3.96 1.2-3.96 4.26v2.04h5.7v6.54h-5.7V47.25h-7.2zM82.723 5.432h7.2v31.919c0 2.939.96 4.2 3.6 4.2.84 0 1.56-.061 2.16-.24v6.42c-.84.239-1.98.359-3.42.359-6.359 0-9.54-3.24-9.54-9.779V5.432zM97.543 32.131c0-4.5 1.619-8.34 4.8-11.4 3.18-3.06 7.079-4.62 11.699-4.62s8.52 1.56 11.699 4.62c3.18 3.06 4.8 6.9 4.8 11.4s-1.62 8.34-4.8 11.399-7.079 4.62-11.699 4.62-8.52-1.561-11.699-4.62c-3.181-3.059-4.8-6.899-4.8-11.399zm23.158 6.779c1.801-1.859 2.7-4.08 2.7-6.779 0-2.7-.899-4.92-2.7-6.72-1.8-1.86-4.02-2.76-6.659-2.76-2.7 0-4.92.9-6.72 2.76-1.74 1.8-2.64 4.02-2.64 6.72 0 2.699.899 4.92 2.64 6.779 1.8 1.801 4.02 2.7 6.72 2.7 2.64 0 4.859-.899 6.659-2.7zM142.002 49.17l-12.419-32.159h7.079l6.42 17.04 8.46-17.819 8.399 17.819 6.42-17.04h7.079L161.021 49.17l-9.479-19.619-9.54 19.619zM174.942 47.25V26.431c0-6.839 3.72-10.259 11.22-10.259 2.04 0 3.78.18 5.28.48v6.419c-1.141-.24-2.4-.36-3.78-.36-3.78 0-5.58 1.08-5.58 5.1V47.25h-7.14zM216.761 21.391v-4.38h7.2V47.25h-7.2v-4.38c-1.02 2.94-4.68 5.04-9.659 5.04-4.26 0-7.86-1.5-10.8-4.5-2.88-3.061-4.319-6.779-4.319-11.279s1.439-8.22 4.319-11.22c2.939-3.06 6.54-4.56 10.8-4.56 4.979 0 8.639 2.1 9.659 5.04zm-2.16 17.339c1.801-1.74 2.7-3.96 2.7-6.6 0-2.641-.899-4.859-2.7-6.6-1.739-1.74-3.959-2.64-6.539-2.64s-4.68.9-6.42 2.64c-1.68 1.74-2.52 3.959-2.52 6.6 0 2.64.84 4.859 2.52 6.6 1.74 1.74 3.84 2.64 6.42 2.64s4.799-.899 6.539-2.64z" />
        </g>
        <defs>
          <path
            id="starflower"
            d="M36.171 40.004l-9.463-4.887.002-.055c-.229 2.967-.04 6.236 1.246 8.862.689 1.41 1.75 2.544 3.028 3.362 3.023 1.762 7.016 1.645 10.125-.618 4.148-3.014 5.162-8.684 2.268-12.671a13.653 13.653 0 0 0-1.444-1.635c-2.761.08-5.287-.634-7.436-1.629l1.674 9.271zm-25.187-6.61c-1.455 1.421-2.29 3.306-2.483 5.28-.144 2.995 1.227 6.05 3.904 7.995 4.148 3.011 9.855 2.227 12.75-1.758.396-.547.794-1.23 1.173-2.001-.878-2.488-1.009-4.985-.776-7.253l-8.207 4.232 1.919-10.492-.027-.03c-2.96.708-6.108 1.923-8.253 4.027M6.167 15.268a9.551 9.551 0 0 0-2.631 4.102c-1.587 4.875.925 10.062 5.611 11.584.671.218 1.478.389 2.369.511 2.133-1.629 4.529-2.527 6.793-2.996l-6.615-6.403 10.242-1.423c-1.648-2.556-3.843-5.121-6.539-6.444a8.3 8.3 0 0 0-3.672-.844c-1.97 0-3.945.672-5.558 1.913m32.464-1.969c-.562.183-1.183.448-1.836.777-.793 2.737-2.311 4.972-3.981 6.736l9.006 1.253-7.567 7.332.006.04c2.792 1.203 6.044 2.108 9.02 1.703a8.087 8.087 0 0 0 1.942-.518c4.128-1.842 6.243-6.681 4.758-11.253-1.285-3.957-4.877-6.493-8.688-6.494a8.63 8.63 0 0 0-2.66.424M26.757 2.5c-5.125 0-9.279 3.992-9.279 8.917 0 .84.122 1.848.348 2.94 2.051 1.446 3.569 3.301 4.69 5.169l4.244-8.424 4.78 9.495c1.925-2.155 3.726-4.791 4.379-7.577.078-.582.118-1.123.118-1.604 0-4.924-4.154-8.916-9.28-8.916z"
          />
        </defs>
        <use xlinkHref="#starflower" overflow="visible" fill="#FFF" />
      </svg>
    </div>

    <h1>Terms and Conditions</h1>
    <p>Last updated: November 16, 2018</p>


    <p>These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with https://www.flowra.com website (the "Service") operated by Flowra ("us", "we", or "our").</p>

    <p>Please read these Terms and Conditions carefully before using the Service.</p>

    <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>

    <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>




    <h2>Subscriptions</h2>

    <p>Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.</p>

    <p>At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Flowra cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Flowra customer support team.</p>

    <p>A valid payment method, including credit card or PayPal, is required to process the payment for your Subscription. You shall provide Flowra with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Flowra to charge all Subscription fees incurred through your account to any such payment instruments.</p>

    <p>Should automatic billing fail to occur for any reason, Flowra will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.</p>


    <h2>Free Trial</h2>

    <p>Flowra may, at its sole discretion, offer a Subscription with a free trial for a limited period of time ("Free Trial").</p>

    {/* <p>You may be required to enter your billing information in order to sign up for the Free Trial.</p> */}

    {/* <p>If you do enter your billing information when signing up for the Free Trial, you will not be charged by Flowra until the Free Trial has expired. On the last day of the Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.</p> */}

    <p>At any time and without notice, Flowra reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer.</p>


    <h2>Fee Changes</h2>

    <p>Flowra, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.</p>

    <p>Flowra will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.</p>

    <p>Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.</p>


    <h2>Refunds</h2>

    <p>Certain refund requests for Subscriptions may be considered by Flowra on a case-by-case basis and granted in sole discretion of Flowra.</p>


    <h2>Content</h2>

    <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.</p>

    <p>By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. You agree that this license includes the right for us to make your Content available to other users of the Service, who may also use your Content subject to these Terms.</p>

    <p>You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</p>


    <h2>Accounts</h2>

    <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

    <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

    <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>



    <h2>Copyright Policy</h2>

    <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement ("Infringement") of any person.</p>

    <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Infringement" of alex@flowra.com and include in your notice a detailed description of the alleged Infringement.</p>

    <p>You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing your copyright.</p>


    <h2>Intellectual Property</h2>

    <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Flowra and its licensors. The Service is protected by copyright, trademark, and other laws of both the Spain and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Flowra.</p>


    <h2>Links To Other Web Sites</h2>

    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Flowra.</p>

    <p>Flowra has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Flowra shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

    <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>


    <h2>Termination</h2>

    <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

    <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>


    <h2>Limitation Of Liability</h2>

    <p>In no event shall Flowra, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>


    <h2>Disclaimer</h2>

    <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

    <p>Flowra its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p>


    <h2>Governing Law</h2>

    <p>These Terms shall be governed and construed in accordance with the laws of Spain, without regard to its conflict of law provisions.</p>

    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>


    <h2>Changes</h2>

    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

    <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>


    <h2>Contact Us</h2>

    <p>If you have any questions about these Terms, please contact us via email at alex@flowra.com.</p>

    <a href="/about/">Back to main page</a>
  </div>
)

export default TOS
