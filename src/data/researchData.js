// src/researchData.js

import ExportTable from "../components/ExportTable";
import '../components/ResearchProblem.css';

const researchData = {
    researchGap: {
        left: (

            <div className="research-container">
                <div className="research-box">
                    <div className="research-content">
                        <div className="research-icon">
                            <span className="icon-star">⭐</span>
                        </div>
                        <div className="research-details">
                            <h2>Research Gap</h2>
                            <p>How to apply fast-changing AI/ML to increase sustainability and efficiency in the coconut oil industry?</p>
                            <b>1. Use of Advanced Technologies:</b> There is a lack of research on applying machine learning and predictive models to enhance market outcomes and optimize production processes in Sri Lanka's coconut oil sector.
                            <br /><br />
                            <b>2. Multivariable Price Forecasting:</b> Current price forecasting models rely on single variables and fail to incorporate critical factors like production levels, market demand, climate, and economic conditions, limiting the accuracy and depth of price predictions.
                            <br /><br />
                            <b>3. Production and Inflation:</b> No studies exist predicting optimal coconut oil production levels to mitigate inflation in Sri Lanka, leaving policymakers without key insights on balancing supply and price stability.
                            <br /><br />
                            <b>4. Optimal Distribution for Profit:</b> Research is lacking on how to optimize the distribution of coconut oil to different countries to maximize profits, which could guide producers and exporters toward more profitable strategies.
                        </div>
                    </div>
                </div>
            </div>


        ),
        right: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    litreatureSurvey: {
        left: (
            <>
                <p>
                    Coconut cultivation is widespread across Sri Lanka, with
                    coconut palms covering a considerable portion of the
                    country's land. The coconut tree is often referred to as the
                    "tree of life" in Sri Lanka due to the versatility and the
                    multitude of products derived from the coconut. Sri Lanka
                    exports a significant amount of coconut oil to various
                    countries around the world. The country is known for
                    producing high-quality virgin coconut oil (VCO), which is
                    extracted from fresh coconut meat without undergoing
                    chemical refining. Sri Lanka has numerous coconut oil
                    processing facilities scattered across the country. These
                    facilities process coconuts into oil through methods such as
                    cold-pressing or expeller pressing to retain the oil's natural
                    flavor and nutrients. Some larger facilities may also engage
                    in refining processes to produce refined coconut oil. Sri
                    Lankan coconut oil manufacturers adhere to strict quality
                    standards to ensure that their products meet international
                    requirements, which include compliance with food safety
                    regulations and certifications such as ISO (International
                    Organization for Standardization) and HACCP (Hazard
                    Analysis and Critical Control Points).
                </p>
                <p>
                    Sri Lanka is the fourth-largest coconut producer as of 2021
                    [1] and, as Table 1 shows, the seventh-largest coconut oil
                    producer as of 2019 [2]. Because the country has an
                    abundance of coconut resources, Sri Lankans have an
                    outstanding chance to increase the country's earnings by
                    generating more coconut oil. Sri Lanka's economy depends
                    heavily on coconut oil, but the sector hasn't made the most of
                    contemporary technology to the fullest extent possible.
                </p>

                <p>
                    Sri Lanka satisfies approximately 1.33% of the
                    worldwide demand for coconut oil, totaling an export value
                    of USD 62.7 million. The primary importers of coconut oil
                    from Sri Lanka include the United States, Australia,
                    Germany, Saudi Arabia, the United Kingdom, and the
                    Netherlands [3].
                </p>

                <p>
                    The study endeavors to shed light on the nuanced
                    interdependencies within the Sri Lankan coconut industry
                    and explore avenues for resilient adaptation in the face of
                    evolving environmental and market forces [4].

                </p>
            </>
        ),
        right: (
            <>
                <ExportTable />
            </>
        ),
    },
    researchProblem: {
        left: (
            <>
                <div>How to apply fast-changing AI/ML to increase sustainability and efficiency in the coconut oil industry?</div><br />

                <div>Support coconut oil manufacturers to choose which oil type to be manufactured?​</div><br />

                <div>How much of coconut oil will be required in the future through past insights?​</div><br />

                <div>Provide fast coconut oil quality predicting system through smartphone with high accuracy lab test?​</div><br />

                <div>Provide marketing features such as finding out which countries to export to and what percentage?</div>
            </>
        ),
        right: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },



};

export default researchData;
