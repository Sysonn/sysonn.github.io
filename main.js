document.addEventListener('DOMContentLoaded', function() {
    // Navigation Menu Toggle for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navBar = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navBar.classList.toggle('active');
            // Toggle between hamburger and close icon
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navBar.classList.remove('active');
            // Reset icon
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple hero animation using Three.js
    initHeroCanvas();
    initFishCanvas();


    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to your server
            // For demonstration, we'll just show a success message
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const projectType = document.getElementById('project-type').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Replace form with success message
            contactForm.innerHTML = `
                <div class="success-message">
                    <h3>Thanks for reaching out, ${name}!</h3>
                    <p>I'll get back to you as soon as possible regarding your ${projectType} project.</p>
                    <button type="button" class="btn btn-primary" id="reset-form">Send Another Message</button>
                </div>
            `;
            
            // Add event listener to reset form
            document.getElementById('reset-form').addEventListener('click', function() {
                location.reload();
            });
        });
    }

    // Animate on scroll effect for glass cards
    animateOnScroll();

    // Add hover effects to project placeholders
    initProjectPreviewEffects();

    //Setup Modal for project views
    setupProjectModal();
});

// Initialize the hero canvas using Three.js
function initHeroCanvas() {
    // Only initialize if the container exists and Three.js is loaded
    const container = document.getElementById('hero-canvas');
    if (!container || typeof THREE === 'undefined') return;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Create particles for a dynamic background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Custom shader material for particles
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.01,
        //color: 0x8a2be2,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create a simple 3D object
    const geometry = new THREE.IcosahedronGeometry(1, 2);
    const material = new THREE.MeshPhongMaterial({
        //color: 0x00bfff,
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.7
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);    
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xff6a56, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Position camera
    camera.position.z = 4;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const windowX = window.innerWidth / 2;
    const windowY = window.innerHeight / 2;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowX) / 100;
        mouseY = (event.clientY - windowY) / 100;
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate mesh
        mesh.rotation.x += 0.003;
        mesh.rotation.y += 0.005;
        
        // Smooth mouse tracking
        targetX = mouseX * 0.3;
        targetY = mouseY * 0.3;
        
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;
        
        mesh.rotation.y += 0.01 * (targetX - mesh.rotation.y);
        mesh.rotation.x += 0.01 * (targetY - mesh.rotation.x);
        
        // Render scene
        renderer.render(scene, camera);
    }
    
    animate();
}


function initFishCanvas() {
    const scene = new THREE.Scene();
        
    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create a renderer with transparent background
    const canvas = document.getElementById('model-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Animation mixer
    let mixer;
    const clock = new THREE.Clock();
    
    // Load the GLB model
    const loader = new THREE.GLTFLoader();
    let model;
    
    loader.load(
        // Resource URL
        './koi_fish.glb',
        // Called when the resource is loaded
        function(gltf) {
            model = gltf.scene;
            
            // Center the model
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.x = -center.x;
            model.position.y = -center.y;
            model.position.z = -center.z;

            model.rotation.y = Math.PI;
            //model.rotation.z = .2;

            
            // Scale the model if needed
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            if (maxDim > 3) {
                const scale = 10 / maxDim;
                model.scale.set(scale, scale, scale);
            }
            
            scene.add(model);
            
            // Check if the model has animations
            if (gltf.animations && gltf.animations.length) {
                // Create an animation mixer
                mixer = new THREE.AnimationMixer(model);
                
                // Log available animations
                console.log(`Model has ${gltf.animations.length} animations:`, 
                    gltf.animations.map(a => a.name || 'unnamed'));
                
                // Play all animations
                gltf.animations.forEach((clip) => {
                    const action = mixer.clipAction(clip);
                    action.play();
                    //set speed
                    action.setEffectiveTimeScale(2.1);
                });
                
                // Alternatively, play a specific animation by name
                // const action = mixer.clipAction(gltf.animations[0]);
                // action.play();
            } else {
                console.log('Model has no animations');
            }
        },
        // Called while loading is progressing
        function(xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // Called when loading has errors
        function(error) {
            console.error('An error happened', error);
        }
    );
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Update the animation mixer with the elapsed time
        if (mixer) {
            const delta = clock.getDelta();
            mixer.update(delta);
        }
        
        // You can still add manual rotation if desired
        if (model) {
            model.position.x -= 0.008;

            if (model.position.x < -11) {
                model.position.x = 6;
            }
        }
        
        renderer.render(scene, camera);
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Start animation
    animate();
}

function animateOnScroll() {
    const glassCards = document.querySelectorAll('.glass-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    glassCards.forEach(card => {
        // Add a base class for animation
        card.classList.add('animate-on-scroll');
        observer.observe(card);
    });
}

// Add interaction effects to project previews
function initProjectPreviewEffects() {
    const projectPreviews = document.querySelectorAll('.project-preview');
    
    projectPreviews.forEach(preview => {
        preview.addEventListener('mouseenter', () => {
            preview.classList.add('preview-hover');
        });
        
        preview.addEventListener('mouseleave', () => {
            preview.classList.remove('preview-hover');
        });
    });
}

// Add this to the CSS file later (couldn't fit in original CSS file due to length)
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .preview-hover {
        transform: scale(1.02);
        transition: transform 0.3s ease;
    }
    
    .success-message {
        text-align: center;
        padding: 30px 20px;
    }
    
    .success-message h3 {
        margin-bottom: 20px;
        color: white;
    }
    
    .success-message p {
        margin-bottom: 30px;
    }
`;
document.head.appendChild(style);


//Modal Page(s)

function setupProjectModal() {
    // Create the modal HTML structure and append to body
    const modalHTML = `
        <div id="project-modal" class="modal">
          <div class="glass-modal" style="padding: 10px; width: 100%; max-width: 1400px;">
              <button class="modal-close glass-card">&times;</button>
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modal-title"></h2>
                </div>
                <div class="modal-body">
                    <div class="modal-loading">
                        <div class="loader"></div>
                        <p>Loading project details...</p>
                    </div>
                    <div id="modal-content"></div>
                </div>
            </div>
           </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Get modal elements
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    
    // Add click event to all "View Demo" buttons
    const demoButtons = document.querySelectorAll('.btn-primary[href="#"]');
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get project details
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('h3').textContent;
            
            // Get project file path (you would need to add data attributes to your buttons)
            // For example: <a href="#" data-project-file="coca-cola-project.html" class="btn btn-sm btn-primary">View Demo</a>
            const projectFile = this.getAttribute('data-project-file');
            
            if (!projectFile) {
                console.error('No project file specified for:', projectTitle);
                return;
            }
            
            // Set modal title and show modal
            // modalTitle.textContent = projectTitle;
            modal.classList.add('modal-active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            
            // Show loading state
            modalContent.innerHTML = '';
            document.querySelector('.modal-loading').style.display = 'flex';
            
            // Fetch the project HTML file
            fetch(projectFile)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => {
                    // Hide loading, show content
                    document.querySelector('.modal-loading').style.display = 'none';
                    modalContent.innerHTML = html;
                    
                    // Initialize any interactive elements inside the modal
                    // This could be Three.js canvas or other interactive elements
                    initModalInteractiveElements();
                })
                .catch(error => {
                    console.error('Error loading project details:', error);
                    modalContent.innerHTML = `
                        <div class="error-message">
                            <p>Failed to load project details. Please try again later.</p>
                        </div>
                    `;
                    document.querySelector('.modal-loading').style.display = 'none';
                });
        });
    });
    
    // Close modal on X button click
    modalClose.addEventListener('click', closeModal);
    
    // Close modal on click outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('modal-active')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('modal-active');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Clean up any resources
        cleanupModalResources();
    }
}

// Initialize interactive elements inside the modal
function initModalInteractiveElements() {
    // Check if there's a Three.js canvas to initialize
    const canvasContainer = document.getElementById('canvas-container');
    if (canvasContainer && typeof THREE !== 'undefined') {
        initThreeJsCanvas(canvasContainer);
    }
    
    // Add other initializations as needed
}

// Clean up resources when modal closes
function cleanupModalResources() {
    // If there's a canvas in the modal, dispose it to save resources
    const canvas = document.querySelector('#modal-content canvas');
    if (canvas) {
        const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (context && context.getExtension('WEBGL_lose_context')) {
            context.getExtension('WEBGL_lose_context').loseContext();
        }
    }
}

// Initialize Three.js canvas
function initThreeJsCanvas(container) {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75, 
        container.clientWidth / container.clientHeight, 
        0.1, 
        1000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    
    // Add content to the scene (this is just an example)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
        color: 0xff6a56,
        wireframe: false,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    camera.position.z = 3;
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle window resizing
    window.addEventListener('resize', function() {
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    });
}