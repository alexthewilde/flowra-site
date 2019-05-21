import React from 'react'
import Link from 'gatsby-link'

import './tos.scss';
import './privacy.scss';

const TOS = () => (
  <div id="privacy" className="terms">
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

    <h1>Privacy Policy</h1>

    <p>Effective date: November 16, 2018</p>

    <p>Flowra ("us", "we", or "our") operates the https://www.flowra.com website (hereinafter referred to as the "Service").</p>

    <p>This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

    <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://www.flowra.com</p>

    <h2>Definitions</h2>
    <ul>
        <li>
            <p><strong>Service</strong></p>
                    <p>Service is the https://www.flowra.com website operated by Flowra (Alexander Wilde)</p>
                </li>
        <li>
            <p><strong>Personal Data</strong></p>
            <p>Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
        </li>
        <li>
            <p><strong>Usage Data</strong></p>
            <p>Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
        </li>
        <li>
            <p><strong>Cookies</strong></p>
            <p>Cookies are small files stored on your device (computer or mobile device).</p>
        </li>
            <li>
            <p><strong>Data Controller</strong></p>
            <p>Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed.</p>
            <p>For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.</p>
        </li>
        <li>
            <p><strong>Data Processors (or Service Providers)</strong></p>
            <p>Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the Data Controller.</p>
            <p>We may use the services of various Service Providers in order to process your data more effectively.</p>
        </li>
        <li>
            <p><strong>Data Subject (or User)</strong></p>
            <p>Data Subject is any living individual who is using our Service and is the subject of Personal Data.</p>
        </li>
        </ul>


    <h2>Information Collection and Use</h2>
    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

    <h3>Types of Data Collected</h3>

    <h4>Personal Data</h4>
    <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>

    <ul>
        <li>Email address</li>    <li>First name and last name</li>            <li>Cookies and Usage Data</li>
    </ul>

    <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or the instructions provided in any email we send.</p>

    <h4>Usage Data</h4>

    <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>


    <h4>Tracking & Cookies Data</h4>
    <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>
    <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service.</p>
    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
    <p>Examples of Cookies we use:</p>
    <ul>
        <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>
        <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
        <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
        </ul>

    <h2>Use of Data</h2> 
    <p>Flowra uses the collected data for various purposes:</p>    
    <ul>
        <li>To provide and maintain our Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information so that we can improve our Service</li>
        <li>To monitor the usage of our Service</li>
        <li>To detect, prevent and address technical issues</li>
        <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li></ul>

      
    <h2>Legal Basis for Processing Personal Data under the General Data Protection Regulation (GDPR)</h2>
    <p>If you are from the European Economic Area (EEA), Flowra legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.</p>
    <p>Flowra may process your Personal Data because:</p>
    <ul>
        <li>We need to perform a contract with you</li>
        <li>You have given us permission to do so</li>
        <li>The processing is in our legitimate interests and it is not overridden by your rights</li>
        <li>For payment processing purposes</li>    <li>To comply with the law</li>
    </ul>

        
    <h2>Retention of Data</h2>    
    <p>Flowra will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.</p>
    <p>Flowra will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.</p>    

    <h2>Transfer of Data</h2>
    <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
    <p>If you are located outside Spain and choose to provide information to us, please note that we transfer the data, including Personal Data, to Spain and process it there.</p>
    <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
    <p>Flowra will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

    <h2>Disclosure of Data</h2>


    <h3>Legal Requirements</h3>
    <p>Flowra may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
    <ul>
        <li>To comply with a legal obligation</li>
        <li>To protect and defend the rights or property of Flowra</li>
        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>To protect the personal safety of users of the Service or the public</li>
        <li>To protect against legal liability</li>
    </ul>

    <h2>Security of Data</h2>
    <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>


    <h2>Your Data Protection Rights under the General Data Protection Regulation (GDPR)</h2>
    <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Flowra aims to take reasonable steps to allow you to correct, amend, delete or limit the use of your Personal Data.</p>
    <p>If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>
    <p>In certain circumstances, you have the following data protection rights:</p>
    <ul>
        <li>
            <p><strong>The right to access, update or delete the information we have on you.</strong> Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.</p>
        </li>
        <li>
            <p><strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</p>
        </li> 
        <li>
            <p><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</p>
        </li>
        <li>
            <p><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.</p>
        </li>
        <li>
            <p><strong>The right to data portability.</strong> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</p>
        </li>
        <li>
            <p><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where Flowra relied on your consent to process your personal information.</p>
        </li>
    </ul>
    <p>Please note that we may ask you to verify your identity before responding to such requests.</p>

    <p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>

    <h2>Service Providers</h2>
    <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>
    <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

    <h3>Analytics</h3>
    <p>We may use third-party Service Providers to monitor and analyse the use of our Service.</p>    
    <ul>
            <li>
            <p><strong>Google Analytics</strong></p>
            <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>
            <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.</p>                <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
        </li>
                                    </ul>

      


    <h3>Payments</h3>
    <p>We may provide paid products and/or services within the Service. In that case, we use third-party services for payment processing (e.g. payment processors).</p>
    <p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American
    Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>
    <p>The payment processors we work with are:</p>
    <ul>
                    <li>
            <p><strong>Adyen</strong></p>
            <p>Their Privacy Policy can be viewed at <a href="https://www.adyen.com/policies-and-disclaimer/privacy-policy">https://www.adyen.com/policies-and-disclaimer/privacy-policy</a></p>
        </li>
                        <li>
            <p><strong>PayPal</strong></p>
            <p>Their Privacy Policy can be viewed at <a href="https://www.paypal.com/webapps/mpp/ua/privacy-full">https://www.paypal.com/webapps/mpp/ua/privacy-full</a></p>
        </li>
                                                    </ul>


    <h2>Links to Other Sites</h2>
    <p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>


    <h2>Children's Privacy</h2>
    <p>Our Service does not address anyone under the age of 18 ("Children").</p>
    <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>


    <h2>Changes to This Privacy Policy</h2>
    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
    <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>


    <h2>Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us via email at alex@flowra.com</p>

    <Link to="/">Back to main page</Link>
  </div>
)

export default TOS
