import React, { Component } from 'react';
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignaturePad from "react-signature-pad";
import "./sign.css"


class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.saveImage = this.saveImage.bind(this);
    
  }

 saveImage = () =>{
  let signature = this.refs.mySignature;
  if(signature.isEmpty())
  {
   alert("make sing")

  } else {
    let dataUrl = signature.toDataURL();
// alert(dataUrl)
 window.location.href = dataUrl;
 
  var iframe = "<iframe width='100%' height='100%' src='" + dataUrl + "'></iframe>"
  var x = window.open();
  x.document.open();
  x.document.write(iframe);
  x.document.close();
  }
  
}

  render() {
    // the modal you will toggle on and off
    // const modal = (
    //   // <div className="modal">
    //   //   Hello, my name is Godzilla
    //   // </div>
    // );
    
    // the return() to put your default HTML into the DOM
    return (
  <Layout>
    <SEO title="Home" />
<div className="content">
    <h1>Contract of work for website design and development</h1>
<p>Between <strong>Alice</strong>, referred to below as "Designer", and <strong>Bob</strong>, referred to below as "Customer".</p>
<h2>1. Agreement of parties</h2>
<p>Customer hires Designer to redesign the current website, <strong>bobswebsite.com</strong>, for the estimated total price of <strong>$PRICE</strong>. Designer agrees to provide quality service and to answer to the Customers requests in a timely manner.</p>
<p>The agreed payment plan is at the end of the document.</p>
<h2>2. Legal matters and copyrights</h2>
<p>The Customer will guarantee to the Designer that any elements of text, graphics, photos, trademarks or other artwork that the Customer provides for inclusion in the website are either owned by him or that he has the permission to use them. When the Designer receives the final payment, copyright is automatically assigned as follows: Customer will own the graphics, virtual elements, text content photographs and other data provided, unless someone else owns them. The Designer owns the XHTML markup, CSS and other code and he licenses it to the Customer for use on only this project. Designer can reserve the right to display, with Customer\'s consent, the work as part of the portfolio.</p>
<h2>3. Term and termination</h2>
<h2>4. Force majeure</h2>
<p>Designer shall not be deemed in breach of this contract if Designer is unable to complete the services or any portion by reason of fire, earthquake, labor dispute, illness, internet breaches or any technical issues that may appear beyond Designer\'s control. Upon occurrence of any Force Majeure Event, Designer shall give notice to the Customer of his inability to perform or of delay in completing the services and shall propose revisions to the schedule for completion of the services.</p>
<h2>5. Payment plan</h2>
<p>Payment shall be done as follows:</p>
<ul>
<li>50% of total estimated fee will be required to commence work, after this contract has been approved and signed by both parties.</li>
<li>50% upon project closure.</li>
</ul>
<p>Any extra time required outside the project timeline/services mentioned at point 1 of this contract, will be billed at a rate of <strong>$FEE</strong> per hour.</p>
<h2>Both parties agree to the terms stipulated above:</h2>

</div>
<div>
  <SignaturePad  ref="mySignature"
 clearButton="true" 
/>
<button onClick={this.saveImage}>Save image</button>

</div>
  </Layout>)
  } 
}

export default IndexPage
