const Experience = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>👔 Professional Experience 👔</h1>
                <div> 
                    <div class="company">
                        <img src="https://mma.prnewswire.com/media/473344/eMoney_Advisor_Logo.jpg?p=facebook" alt="Logo" class="logo"/>
                    </div>  
                    <div class="lined"> 
                        <h3>Software Developer Co-op</h3>
                        <h4>July 2023 - December 2023</h4>
                        <ul>
                            <li><a href="https://emoneyadvisor.com/" target="_blank" class="link-black">eMoney</a> is a comprehensive and scalable technology platform and services that empowers financial advisors to meet a broad range of financial planning needs for their clients.</li>                            
                            <li>Project experience coming soon!!!</li>
                        </ul>
                    </div>
                </div>

                <div> 
                    <div class="company">
                        <img src="https://companieslogo.com/img/orig/GIB-e0c1f0d7.png?t=1658656116" alt="Logo1" class="logo1"/>
                    </div>  
                    <div class="lined">
                        <h3>Software Developer Intern</h3>
                        <h4>July 2022 - August 2022</h4>
                        <ul>
                            <li><a href="https://www.cgi.com/en/" target="_blank" class="link-black">CGI</a> is a Canadian multinational information technology consulting and systems integration company which is among the largest IT and business consulting services firms in the world.</li>
                            <li>Employed on the State of the Maine project working directly with our client on performant driven software solutions.</li>
                            <li>Automated 60+ manual processes with VBA scripts in Excel with the use of macros to identify missing queries in multiple DB shortening downtime during each release.</li>
                            <li>Automated the build of a concatenated balance spreadsheet from Excel to a txt file with VBA scripts and macros. Presented the project to the client.</li>
                            <li>Implemented various SQL queries to access the database and track the status of vendor documents.</li>
                            <li>Technologies: SQL, Excel, VBA</li>
                        </ul>
                    </div>
                </div>
                
                <div> 
                    <div class="company">
                        <img src="https://www.intelligenttransport.com/wp-content/uploads/veaa-logo.jpg" alt="Logo1" class="logo1"/>
                    </div>  
                    <div class="lined">
                        <h3>Software Developer Intern</h3>
                        <h4>July 2021 - August 2021</h4>
                        <ul>
                            <li><a href="https://www.veea.com/" target="_blank" class="link-black">Veea</a> is an edge platform provider headquartered in New York City which has brought a broad range of Wi-Fi, 4G/5G mobile wireless, and IoT products to market over the past two decades.</li>
                            <li>Created multiple templates from scratch to send transactional emails to customers for the VeeaHub products.</li>
                            <li>Wrote utility scripts in Python & Java to send templated emails by triggering the MailChimp API, saving 2+ hours daily.</li>
                            <li>Investigated AWS QuickSight BI Tool to create graphs from live VeeaHub product data via the relational database source (RDS) for the Veea conference.</li>
                            <li>Graphs contained an analysis of the VeeaHub devices, usage of the products, and data cluster reporting related to Veeahub deveices.</li>
                            <li>Technologies: Python, Java, AWS QuickSight, RDS, API</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Experience;