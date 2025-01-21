fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    // Populate summary
    document.getElementById('summary-content').textContent = data.summary;

    // Populate education
    const educationList = document.getElementById('education-list');
    data.education.forEach((edu) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${edu.degree}</strong> - ${edu.institution} (${edu.year})`;
      educationList.appendChild(li);
    });

    // Populate experience
    const experienceList = document.getElementById('experience-list');
    data.experience.forEach((exp) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${exp.title}</strong><br>${exp.description} (${exp.duration})`;
      experienceList.appendChild(li);
    });

    // Populate projects
    const projectsList = document.getElementById('projects-list');
    data.projects.forEach((project) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
      projectsList.appendChild(li);
    });

    // Populate skills
    const skillsList = document.getElementById('skills-list');
    data.skills.forEach((skill) => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  })
  .catch((error) => console.error('Error loading data:', error));
