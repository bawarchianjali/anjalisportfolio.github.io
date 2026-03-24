const projectData = {
    project1: {
        title: "Theater Pop Up Store",
        content: `
            <div class="split-wrapper">
                <div class="split-left">
                    <img src="./images/tsr/tsrtrial.gif">
                </div>
                
                <div class="split-right">
                    <div class="sticky-text">
                        <span>Trend Spotting & Research (Student Project)</span>
                        <h1>Theater Pop Up Store (CMF)</h1>
                        <p>Create a trend based design direction for a chosen fashion brand (Indian Fashion brand or an international fashion brand retailing in India) to be implemented in their communication design for FW 2026. Suitable tools of trend research to be applied </p>
                        
                        <div class="project-meta">
                            <h4>Objective</h4>
                            <p>To design a Pop-Up store to create more hype</p>
                            <h4>Tools</h4>
                            <p>Blender</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // Repeat the split-wrapper structure for project2, 3, etc.

    project2: {
        title: "Nike Store",
        content: `
            <div class="split-wrapper">
                <div class="split-left">
                    <img src="./images/cc/nikefullmock.gif">
                </div>
                
                <div class="split-right">
                    <div class="sticky-text">
                        <span>VM / Personal Project</span>
                        <h1>Nike Store (VM)</h1>
                        <h4>Design Brief</h4>
                        <p>Study an existing brand, focusing on its various VM parameters. Based on the study carried out, Develop and design a hypothetical 3D virtual store using 3D softwares.</p>
                        
                        <div class="project-meta">
                            <h4>Problem Statement</h4>
                            <p>Inefficient Display of products in each nike store resulting in negative customer engagement</p>
                            <div class="project-meta">
                             <h4>Goal</h4>
                            <p>To create an overall Nike Experiential store where customers can test their products in real time, within the mock environment of their specific sports inside the Nike Store</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

     project3: {
    title: "GoBoult Audio Airbass Series",
    content: `
    <div class="split-wrapper">
        <div class="split-left">
            <img src="./images/infoear-01.gif"> </div> <div class="split-right">
            <div class="sticky-text">
                <span>CMF / Personal Project</span>
                <h1>Project Three Title</h1> <h4>Design Brief</h4>
                <p>Analyze GoBoult’s audio product lineup and develop a concept design brief for a next-generation AirBass series model. The design should align with current market trends, elevate aesthetic appeal, and remain consistent with the brand’s evolving design language and identity.</p>
                
                <div class="project-meta">
                    <h4>Problem Statement</h4>
                    <p>Highly saturated and generic designs make it difficult for customers to choose as well as for the brand to stand out</p>
                    <div class="project-meta">
                        <h4>Goal</h4>
                        <p>More distinctive and Upto trends. Dominating the market by creating hype among younger generations and increasing percieved value. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
},
    

     project4: {
        title: "After Intelligence Zine",
        content: `
            <div class="split-wrapper">
        <div class="split-left">
            <img src="./images/cc/pd.gif"> </div> <div class="split-right">
            <div class="sticky-text">
                <span>Publication design / Student Project</span>
                <h1>After Intelligence Zine</h1> <h4>Design Brief</h4>
                <p>Conceptualize and design a detailed sci-fi zine with a minimum of 32 printed pages, focusing on engaging storytelling, immersive visuals, and accessible content for young readers. The publication should explore imaginative science fiction themes while maintaining a cohesive narrative and strong visual identity throughout.</p>
                
                <div class="project-meta">
                    <h4>Problem Statement</h4>
                    <p>A lack of accessible, engaging science fiction reading material for young teens, highlighting the need for a sci-fi zine that is age-appropriate, visually appealing, and easy to dive into.</p>
                    <div class="project-meta">
                        <h4>Goal</h4>
                        <p>To inspire a love for reading by providing content that is both interesting and engaging.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    },
   project5: {
    title: "The Pit - Trailer",
    content: `
        <div class="split-wrapper">
            <div class="split-left">
                <video controls playsinline style="width:100%; border-radius: 10px; margin-bottom: 20px; background: #000;">
                    <source src="./images/ds.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>

                <img src="./images/cc/ds.gif" style="width:100%;">
            </div>
            
            <div class="split-right">
                <div class="sticky-text">
                    <span>3D / Personal Project</span>
                    <h1>The Pit- Game Trailer</h1>
                    <p>Click the play button on the left to view the full project</p>
                    
                    <div class="project-meta">
                        <h4>Objective</h4>
                        <p>Develop high-quality 3D animation that reflects a dark, eerie, and realistic environment.
Use lighting, shadows, and camera movement to build tension and fear.</p>
                        <h4>Goal</h4>
                        <p>To craft a gripping 3D animated horror trailer that blends immersive visuals and storytelling, specifically tailored to captivate Indian gaming audiences.</p>
                    </div>
                </div>
            </div>
        </div>
    `
},
     project6: {
        title: "Pathu's Pickles",
        content: `
          <div class="split-wrapper">
        <div class="split-left">
            <img src="./images/pathumock.jpg"> </div> <div class="split-right">
            <div class="sticky-text">
                <span>Web Design / Student Project</span>
                <h1>Pathu's Pickles</h1> <h4>Design Brief</h4>
                <p>Design a visually rich and user-friendly website for an Indian pickle brand that showcases a variety of traditional and modern pickles. The website should reflect Indian culture, authenticity, and homemade goodness while appealing to both domestic and global audiences.</p>
                
                <div class="project-meta">
                    <h4>Problem Statement</h4>
                    <p>Many existing pickle websites do not effectively communicate the true flavours and cultural roots of Indian pickles through their visual and design language.</p>
                    <div class="project-meta">
                        <h4>Goal</h4>
                        <p>To attract and engage users through appealing visuals, storytelling, and easy navigation.</p>
                          <h6>*All Images are AI generated</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
           
        `
    },
};

function openProject(id) {
    const overlay = document.getElementById('project-overlay');
    const content = document.getElementById('overlay-content');

    if (!projectData[id]) {
        console.error("No data found for: " + id);
        return;
    }
    
    content.innerHTML = projectData[id].content;
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}

function closeProject() {
    document.getElementById('project-overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}
// This runs automatically when the work.html page finishes loading
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectTag = params.get('project'); // This finds "project1" from the URL

    if (projectTag && projectData[projectTag]) {
        openProject(projectTag); // This triggers your split-screen overlay
    }
});