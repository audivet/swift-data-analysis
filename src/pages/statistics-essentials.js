import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const StatisticsEssentialsResource = () => (
  <Layout>
    <Helmet>
      <title>Statistics Essentials for Dummies | External Resource</title>
      <meta
        name="description"
        content="External resource: Statistics Essentials for Dummies. Please note this material is copyrighted."
      />
      <meta
        name="keywords"
        content="Statistics Essentials, external resource, copyright material, data analysis"
      />
    </Helmet>

    <h1>External Resource: Statistics Essentials for Dummies</h1>

    <section>
      <h2>About this Resource</h2>
      <p>
        We are providing the <strong>Statistics Essentials for Dummies</strong> by Deborah Rumsey, PhD, as a supplemental resource for your studies in basic statistics and data analysis. Please note that this is a copyrighted material.
      </p>
      <p>
        <strong>Important:</strong> This document is provided for personal use only. Any reproduction, storage, or transmission of this file, without the author's and publisher's consent, is strictly prohibited.
      </p>
    </section>

    <section>
      <h2>Download the File</h2>
      <p>
        You can access the PDF by clicking on the link below. Please make sure to adhere to all copyright guidelines.
      </p>
      <a href="/resources/Statistics-Essentials-Dummies.pdf" target="_blank" rel="noopener noreferrer">
        Download Statistics Essentials for Dummies (PDF)
      </a>
    </section>

  </Layout>
);

export default StatisticsEssentialsResource;