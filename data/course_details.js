var jsonData = `
[
  {
    "id": "1",
    "title": "Web Development Fundamentals",
    "subtitle": "Build a strong foundation in modern web development and start creating real websites step by step.",
    "instructor": "Google",
    "category": "development",
    "level": "beginner",
    "price": "49.99",
    "rating": "4.8",
    "language": "english",
    "learningType": "course",
    "image": "../img/web.jpg",
    "description": "Learn the foundations of HTML, CSS, and JavaScript to build modern websites.",
    "infoParagraph1": "This course is designed for students who want to begin their journey in web development in a simple and practical way. It introduces the core building blocks of modern websites and explains how structure, style, and interaction work together to create real web pages.",
    "infoParagraph2": "Throughout the course, learners will gradually build confidence by working with essential frontend concepts and applying them in small practical examples. By the end, students will have a clearer understanding of how websites are created and how they can continue toward more advanced frontend topics.",
    "materials": [
      "Course syllabus PDF",
      "HTML and CSS practice files",
      "JavaScript code examples",
      "Mini project instructions"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Web Development",
      "videoUrl": "https://www.youtube.com/embed/UB1O30fR-EE",
      "description": "In this module, learners are introduced to the structure of websites and the role of HTML, CSS, and JavaScript. The goal is to build a clear first understanding of how the frontend of a website is organized and how different technologies work together."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "HTML Page Structure",
          "content": "HTML is the structural backbone of a webpage. It gives meaning and organization to the content that appears in the browser, such as headings, paragraphs, images, links, lists, and forms. When a developer writes HTML, they are not mainly deciding how the page will look, but rather how the page is built and how each part relates to the others. This is why HTML is often described as the skeleton of a website, because it holds the main parts together in a clear order.\n\nA proper HTML page usually starts with the document declaration and basic tags such as html, head, and body. Inside the body, the page is divided into meaningful areas like the header, navigation, main content, sections, articles, and footer. Semantic tags help make the page easier to read and understand for both developers and browsers. A strong HTML structure improves accessibility, helps search engines understand the page better, and creates a solid base for CSS styling and JavaScript interactivity.",
          "isOpen": false
        },
        {
          "title": "CSS Styling Basics",
          "content": "CSS is the language responsible for the visual appearance of a webpage. While HTML builds the content and structure, CSS controls how that content looks by changing colors, fonts, spacing, borders, alignment, and layout. Without CSS, a webpage can still work, but it will look plain and unorganized. CSS allows developers to turn a simple page into something more attractive, readable, and easier for the user to navigate.\n\nOne of the most important ideas in CSS is that styles can be reused across many elements. A developer can create consistent designs for buttons, cards, sections, and text so the whole site feels connected. CSS also introduces concepts like margin, padding, display, positioning, flexbox, and grid, which help organize content on the page in a clean way. Good CSS is not just about beauty, but also about clarity, consistency, and making the user experience more comfortable.",
          "isOpen": false
        },
        {
          "title": "Simple Interactivity with JavaScript",
          "content": "JavaScript is the programming language that adds behavior and interaction to a webpage. It allows the page to respond when a user clicks a button, types in an input, opens a menu, submits a form, or interacts with different elements on the screen. This changes the webpage from being static to being dynamic, which means it can react and update without needing to reload everything.\n\nThe basic ideas behind JavaScript interactivity include variables, functions, events, and DOM manipulation. Variables store data, functions organize actions, and events detect user behavior such as clicking or typing. The DOM represents the webpage as a structure that JavaScript can access and modify. By using these ideas together, developers can create practical features such as showing hidden content, changing text, validating forms, and building interfaces that feel more alive and user-friendly.",
          "isOpen": false
        }
      ]
    },
    "notes": "This course is ideal for beginners who want to start web development from zero and build a practical foundation before moving to more advanced frontend topics."
  },
  {
    "id": "2",
    "title": "UI / UX Design Essentials",
    "subtitle": "Understand how to design digital products that are visually appealing, easy to use, and centered around the user experience.",
    "instructor": "Meta",
    "category": "design",
    "level": "beginner",
    "price": "59.99",
    "rating": "4.6",
    "language": "english",
    "learningType": "specialization",
    "image": "../img/UI_UX.png",
    "description": "Understand design thinking, wireframes, prototypes, and better user experiences.",
    "infoParagraph1": "This course introduces the main ideas behind user interface and user experience design in a simple and structured way. Students will learn why visual clarity, user needs, and interaction flow are important when building digital products.",
    "infoParagraph2": "It also helps learners understand how designers move from ideas to real screens by using research, wireframes, and prototypes. The course is especially useful for students who want to combine creativity with practical digital problem solving.",
    "materials": [
      "Design process slides",
      "Wireframing templates",
      "Prototype examples",
      "User testing checklist"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to UI / UX Design",
      "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      "description": "This module introduces design thinking and user-centered design. Learners begin understanding how digital interfaces are planned, how user needs are identified, and how design decisions affect the overall experience."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Design Thinking",
          "content": "Design thinking is a problem-solving approach that begins with understanding the user before trying to build a solution. Instead of starting with colors, shapes, or features, designers first focus on the people who will use the product. They study user needs, frustrations, goals, and behavior in order to create something useful and meaningful. This makes design thinking more than creativity alone, because it combines imagination with empathy and practical thinking.\n\nThe process often moves through stages such as understanding the problem, defining it clearly, generating ideas, building possible solutions, and testing them. Each stage helps improve the product step by step instead of depending on the first idea that comes to mind. Design thinking encourages designers to revise and improve based on feedback, which leads to products that are more user-centered, more effective, and better connected to real-life needs.",
          "isOpen": false
        },
        {
          "title": "Wireframes",
          "content": "Wireframes are simple visual layouts that show the structure of a page or screen before the final design is created. They are used to plan where important elements will appear, such as headers, text areas, buttons, images, menus, and forms. A wireframe is not meant to look beautiful or polished. Its purpose is to focus on organization, layout, and user flow before spending time on detailed styling.\n\nBecause wireframes are simple, they make it easier to test ideas and discuss changes early in the design process. Designers can quickly rearrange sections, improve navigation, and think more clearly about what the user will see first and how they will move through the product. A strong wireframe acts like a blueprint, helping the team understand the page structure before turning it into a fully styled interface.",
          "isOpen": false
        },
        {
          "title": "Prototypes and Testing",
          "content": "A prototype is a model of a product that gives a more realistic sense of how the final design may behave. Unlike a wireframe, a prototype can include interactions such as clicking buttons, moving between screens, or opening menus. This allows designers, clients, and users to experience the flow of the product before it is actually developed. Prototypes help turn ideas into something more practical and easier to evaluate.\n\nTesting is the process of showing that prototype to users or reviewers and observing how they interact with it. This reveals confusion, design weaknesses, and parts that may not work as expected. Instead of guessing whether a design is good, testing provides real feedback based on actual user behavior. That feedback helps designers improve the product before development begins, which saves time and leads to better design decisions.",
          "isOpen": false
        }
      ]
    },
    "notes": "This course is suitable for students interested in web and app design who want a strong introduction to UI and UX fundamentals."
  },
  {
    "id": "3",
    "title": "Digital Marketing Strategy",
    "subtitle": "Explore the key ideas behind digital promotion, audience targeting, and campaign planning in a practical and simple way.",
    "instructor": "IBM",
    "category": "marketing",
    "level": "intermediate",
    "price": "39.99",
    "rating": "4.5",
    "language": "english",
    "learningType": "course",
    "image": "../img/marketing.jfif",
    "description": "Learn SEO, content planning, social media strategy, and campaign analysis.",
    "infoParagraph1": "This course helps learners understand the main ideas behind digital marketing and how businesses use online channels to reach people effectively. It introduces core topics such as audience targeting, campaign structure, and communication strategy.",
    "infoParagraph2": "Students will also see how marketing decisions are supported by data, content planning, and performance tracking. The course is practical and gives a clear view of how digital campaigns are created and evaluated in real settings.",
    "materials": [
      "Marketing strategy notes",
      "Campaign planning worksheet",
      "SEO checklist",
      "Performance tracking sheet"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Digital Marketing",
      "videoUrl": "https://www.youtube.com/embed/nU-IIXBWlS4",
      "description": "This module introduces the role of digital marketing, the importance of audience analysis, and the way businesses communicate their message through modern online platforms."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Target Audience",
          "content": "A target audience is the specific group of people a business wants to reach with its product, service, or message. In digital marketing, this idea is very important because not every person online has the same interests, needs, habits, or buying behavior. A successful campaign becomes much stronger when it is created for the right audience instead of trying to appeal to everyone at once. Knowing the audience helps marketers choose the right message, tone, platform, and content style.\n\nMarketers usually identify a target audience by studying age, interests, lifestyle, location, online behavior, and common problems that users want solved. This makes campaigns more relevant and more persuasive because the content feels connected to the people receiving it. When a business truly understands its audience, marketing becomes less random and more strategic, which leads to better engagement and stronger results.",
          "isOpen": false
        },
        {
          "title": "SEO Basics",
          "content": "SEO, or search engine optimization, is the process of improving a website so it appears more clearly and effectively in search engine results. When users search for something online, search engines try to show the most relevant pages. SEO helps websites become more visible by making their content useful, organized, and easy for search engines to understand. This means SEO plays an important role in helping businesses attract visitors without relying only on paid advertising.\n\nImportant SEO practices include using relevant keywords, writing clear content, organizing headings properly, improving page speed, and making the site easy to navigate. Good SEO is not about tricking the search engine, but about making the website genuinely stronger for users and more understandable to search systems. Over time, strong SEO can increase traffic, improve visibility, and help a website reach the right people more effectively.",
          "isOpen": false
        },
        {
          "title": "Campaign Analysis",
          "content": "Campaign analysis is the process of examining how a marketing campaign performed after it was launched. It helps marketers understand whether the campaign reached the right people, created engagement, and achieved its goals. Without analysis, marketing decisions become based on guessing, but with analysis, future campaigns can be improved using real evidence and measurable performance.\n\nCommon campaign indicators include impressions, clicks, conversions, engagement rate, and return on investment. These measures help marketers understand what worked well and what needs change. By analyzing the results carefully, businesses can improve the timing of campaigns, the quality of content, and the way audiences are targeted. Campaign analysis turns marketing into a learning process, where each campaign helps make the next one more effective.",
          "isOpen": false
        }
      ]
    },
    "notes": "This course is best for learners who already know the basics of online platforms and want to understand digital marketing more deeply."
  },
  {
    "id": "4",
    "title": "Business Analytics for Beginners",
    "subtitle": "Learn how business data can support smarter decisions and stronger performance across different areas of an organization.",
    "instructor": "Harvard University",
    "category": "business",
    "level": "beginner",
    "price": "69.99",
    "rating": "4.9",
    "language": "english",
    "learningType": "professional_certificate",
    "image": "../img/business.jpg",
    "description": "Use data and reporting tools to support business decisions and performance tracking.",
    "infoParagraph1": "This course introduces learners to the role of data in modern organizations and shows how business performance can be understood through numbers, reports, and visual summaries. It simplifies analytics concepts so that beginners can approach them with confidence.",
    "infoParagraph2": "Students will gradually understand how data supports decision making in finance, operations, marketing, and management. The course is practical and aims to build a mindset that connects information with action in a business environment.",
    "materials": [
      "Business dashboard examples",
      "Data interpretation notes",
      "Practice datasets",
      "Weekly case studies"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Business Analytics",
      "videoUrl": "https://www.youtube.com/embed/9f-g0YcM9dA",
      "description": "This module introduces the basic idea of business analytics and explains why organizations rely on data to evaluate performance, understand patterns, and make better decisions."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Understanding Business Data",
          "content": "Business data is the information organizations collect through their daily activities, such as sales numbers, customer records, financial results, employee performance, and inventory levels. On its own, raw data may look like isolated numbers or facts, but when it is organized and interpreted correctly, it becomes a valuable source of insight. Business data allows companies to understand what is happening, identify patterns, and recognize strengths and problems.\n\nUnderstanding business data means knowing what the numbers represent, where they come from, and why they matter. Different departments collect different types of data, but all of them use that information to support decisions. Once learners begin to understand how business data works, they move from simply seeing numbers to discovering useful meaning behind those numbers.",
          "isOpen": false
        },
        {
          "title": "Reports and Dashboards",
          "content": "Reports and dashboards are tools used to present business data in a clear and useful form. Reports often provide more detailed summaries, while dashboards focus on key performance indicators that can be checked quickly. Both are important because they help managers and decision-makers understand business performance without having to read large amounts of raw data manually.\n\nA well-designed dashboard highlights the most important measures such as revenue, growth, cost, or customer activity. This helps organizations notice changes quickly and respond more effectively. Reports and dashboards are valuable because they turn data into something easier to understand, compare, and act on. They create a bridge between information and practical decision-making inside the business.",
          "isOpen": false
        },
        {
          "title": "Turning Insights into Decisions",
          "content": "An insight is a meaningful understanding gained from studying data, but its real value appears when it leads to action. Turning insights into decisions means using the information discovered in reports or dashboards to improve performance, solve problems, or guide future planning. For example, if customer data shows a drop in satisfaction, management may decide to improve service quality or change communication strategy.\n\nThis process requires more than reading charts or numbers. It involves thinking carefully about what the information means, what caused it, and what response would be most useful. Business analytics becomes powerful when it helps organizations act with more confidence and less guesswork. In this way, insights are not the final goal, but the starting point for better decisions.",
          "isOpen": false
        }
      ]
    },
    "notes": "This course is a strong starting point for learners who want to connect business thinking with data-driven decision making."
  },
  {
    "id": "5",
    "title": "Cybersecurity Basics",
    "subtitle": "Understand the foundations of digital safety, common threats, and the basic practices used to protect information and systems.",
    "instructor": "Microsoft",
    "category": "it-software",
    "level": "intermediate",
    "price": "54.99",
    "rating": "4.7",
    "language": "english",
    "learningType": "course",
    "image": "../img/cyber.jfif",
    "description": "Explore system safety, authentication, online threats, and secure digital practices.",
    "infoParagraph1": "This course introduces essential cybersecurity ideas in a simple way, helping learners understand why digital systems need protection and how threats can affect users, organizations, and information.",
    "infoParagraph2": "It also gives a practical view of how security works in everyday systems through concepts like passwords, access control, safe behavior, and risk awareness. It is useful for students who want a clearer introduction to security without going too deeply into technical details at first.",
    "materials": [
      "Cybersecurity terminology sheet",
      "Authentication examples",
      "Threat analysis notes",
      "Mini security case study"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Cybersecurity",
      "videoUrl": "https://www.youtube.com/embed/inWWhr5tnEA",
      "description": "This module explains the purpose of cybersecurity, the types of information that need protection, and the reasons why digital systems are exposed to risks and attacks."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Core Security Principles",
          "content": "The core principles of cybersecurity are confidentiality, integrity, and availability. Confidentiality means keeping sensitive information private and only accessible to authorized users. Integrity means making sure that information stays accurate and is not changed in an unauthorized way. Availability means ensuring that systems and data remain accessible when they are needed. Together, these three ideas form the basic foundation of digital security.\n\nThese principles help security professionals decide how to protect systems properly. For example, passwords and encryption support confidentiality, access control supports integrity, and backups help ensure availability. Understanding these principles gives learners a clear picture of what security is truly trying to protect. Cybersecurity is not only about stopping attacks, but also about preserving trust, accuracy, and reliability in digital environments.",
          "isOpen": false
        },
        {
          "title": "Authentication and Access",
          "content": "Authentication is the process of proving who a user is before allowing entry into a system. This can be done using passwords, verification codes, fingerprints, or multi-factor authentication. After authentication, access control determines what that user is allowed to see or do. These two ideas work together to protect systems by ensuring that the right people enter and that their permissions are limited to what they actually need.\n\nStrong authentication reduces the risk of unauthorized entry, while well-managed access control reduces damage even if an account is compromised. Not every user in an organization should have the same level of access to files or system settings. This is why authentication and access management are essential parts of cybersecurity. They help protect sensitive data by connecting identity with responsibility.",
          "isOpen": false
        },
        {
          "title": "Common Threats and Safe Practices",
          "content": "Cyber threats are harmful actions or techniques that target systems, users, or data. Common examples include phishing, malware, weak passwords, suspicious links, and social engineering. These threats often succeed not only because of technical weaknesses, but also because people make simple mistakes such as trusting a fake email or reusing the same password across multiple accounts.\n\nSafe practices are the habits that reduce these risks in daily digital life. These include using strong passwords, enabling multi-factor authentication, avoiding suspicious downloads, updating software regularly, and being cautious with unknown messages or websites. Good cybersecurity depends on both technical protection and responsible user behavior. When users follow safe practices consistently, they become an important part of the security system itself.",
          "isOpen": false
        }
      ]
    },
    "notes": "This course is useful for students interested in networks, systems, and digital security fundamentals."
  },
  {
    "id": "6",
    "title": "Personal Productivity Mastery",
    "subtitle": "Improve focus, planning, and daily habits through simple systems that help you manage your time more effectively.",
    "instructor": "Google",
    "category": "personal-development",
    "level": "beginner",
    "price": "29.99",
    "rating": "4.4",
    "language": "arabic",
    "learningType": "course",
    "image": "../img/productive.jpg",
    "description": "Improve planning, focus, daily routines, and practical productivity habits.",
    "infoParagraph1": "This course is designed for learners who want more control over their time, tasks, and daily responsibilities. It focuses on simple productivity principles that can be applied immediately in study, work, and personal life.",
    "infoParagraph2": "Rather than giving complicated theories, the course emphasizes realistic habits, planning methods, and strategies for reducing distractions. It is especially useful for students who want to improve consistency and finish their work more effectively.",
    "materials": [
      "Time planning worksheet",
      "Weekly planner template",
      "Focus exercises",
      "Productivity habit tracker"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Personal Productivity",
      "videoUrl": "https://www.youtube.com/embed/iONDebHX9qk",
      "description": "This module introduces the main idea of productivity and explains how planning, focus, and daily structure can reduce stress and improve performance."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Setting Priorities",
          "content": "Setting priorities means deciding which tasks deserve your attention first based on their importance and urgency. Many people stay busy during the day but still feel unproductive because they spend too much energy on small or low-value tasks. Prioritization helps solve this problem by making it clear what matters most and what can wait. This creates direction and reduces the feeling of being overwhelmed.\n\nWhen priorities are clear, time is used more effectively and decisions become easier. A learner can focus on work that has the greatest impact instead of reacting to every distraction or request. Prioritization is not about doing everything quickly, but about giving attention to the right things in the right order. This makes productivity more meaningful and less stressful.",
          "isOpen": false
        },
        {
          "title": "Building Better Routines",
          "content": "A routine is a repeated pattern of actions that gives structure to the day. Strong routines help reduce mental confusion because useful behaviors become more automatic. For example, when a student studies at the same time each day, they no longer need to argue with themselves about when to begin. Good routines reduce wasted energy and create consistency.\n\nThe power of routines comes from repetition. Small actions performed regularly can produce strong long-term results. A routine does not need to be complicated to be effective. In fact, simple routines are often more sustainable because they fit naturally into real life. Over time, routines support discipline, improve stability, and make productivity feel easier to maintain.",
          "isOpen": false
        },
        {
          "title": "Managing Distractions",
          "content": "Distractions are anything that interrupts attention and pulls focus away from useful work. They can come from phones, notifications, social media, noise, multitasking, or even internal habits like overthinking. One of the biggest obstacles to productivity is not the lack of tasks to do, but the inability to stay focused long enough to do them properly.\n\nManaging distractions begins with recognizing the most common sources of interruption. Once these are identified, practical changes can be made, such as silencing notifications, creating a quiet workspace, using short focus sessions, or setting clear work periods. The goal is not to eliminate every distraction perfectly, but to reduce them enough so concentration becomes easier and work quality improves.",
          "isOpen": false
        }
      ]
    },
    "notes": "This course is simple and practical, and it is helpful for students who want stronger planning habits and better control over their time."
  },
  {
    "id": "7",
    "title": "Advanced JavaScript Concepts",
    "subtitle": "Go beyond the basics of JavaScript and understand the deeper concepts used in professional frontend development.",
    "instructor": "Meta",
    "category": "development",
    "level": "advanced",
    "price": "79.99",
    "rating": "4.9",
    "language": "english",
    "learningType": "specialization",
    "image": "../img/java.jpg",
    "description": "Master advanced JavaScript topics like async code, modules, APIs, and closures.",
    "infoParagraph1": "This course is intended for learners who already know the basics of JavaScript and want to understand the language at a deeper level. It focuses on the concepts that are often used in real frontend development but feel confusing at first.",
    "infoParagraph2": "Through structured explanations and practical examples, learners will explore how JavaScript behaves behind the scenes and how advanced features are used in interactive web applications. It is a strong next step for students moving toward more professional frontend work.",
    "materials": [
      "Advanced JS notes",
      "API practice examples",
      "Closures worksheet",
      "Async programming tasks"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Advanced JavaScript",
      "videoUrl": "https://www.youtube.com/embed/PoRJizFvM7s",
      "description": "This module introduces the transition from basic JavaScript to more advanced ideas, helping learners understand the kind of deeper concepts used in real applications."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Scope and Closures",
          "content": "Scope in JavaScript refers to the area where a variable can be accessed in the program. Some variables are available only inside a function or block, while others can be accessed more broadly. Understanding scope is important because it explains why certain variables work in one place but not in another. It also helps developers avoid naming conflicts and control how data is used within the code.\n\nA closure happens when an inner function continues to remember variables from its outer function even after that outer function has finished running. This is one of the more advanced but powerful ideas in JavaScript. Closures make it possible to preserve data, create private behavior, and build smarter function patterns. They show that functions in JavaScript do more than execute code, because they can also keep access to the context in which they were created.",
          "isOpen": false
        },
        {
          "title": "Async JavaScript",
          "content": "Asynchronous JavaScript allows the program to handle tasks that take time, such as loading data from a server or waiting for an API response, without freezing the rest of the page. This is important because users expect websites to remain responsive while background operations are happening. Without asynchronous behavior, the browser would have to stop everything until one task finishes, which would create a poor user experience.\n\nPromises, async, and await are common tools used to work with asynchronous operations. A promise represents a value that will be available later, while async and await make the code easier to read and manage. Learning asynchronous JavaScript helps developers understand how modern web applications communicate with servers, update content dynamically, and manage delays in a smooth and professional way.",
          "isOpen": false
        },
        {
          "title": "Working with APIs and Modules",
          "content": "An API allows one application to communicate with another and request data or services. In frontend development, APIs are often used to load user information, product data, weather updates, and many other types of external content. This makes websites more dynamic because they are no longer limited to fixed data written directly into the page. Instead, they can connect to real systems and show updated information automatically.\n\nModules help organize JavaScript code by dividing it into separate reusable files. Instead of placing all the code in one large script, developers can separate responsibilities such as utilities, components, and data logic. This makes projects easier to understand, maintain, and expand. APIs and modules are both important because they reflect how modern JavaScript projects are built: connected to external services and organized in a cleaner, more scalable way.",
          "isOpen": false
        }
      ]
    },
    "notes": "This course is best for learners who already know JavaScript basics and want to move toward stronger frontend development skills."
  },
  {
    "id": "8",
    "title": "Healthy Lifestyle and Fitness",
    "subtitle": "Learn practical ways to improve wellness, exercise habits, and everyday health decisions in a balanced way.",
    "instructor": "IBM",
    "category": "health-fitness",
    "level": "beginner",
    "price": "24.99",
    "rating": "4.3",
    "language": "french",
    "learningType": "course",
    "image": "../img/health.jpg",
    "description": "Build better wellness habits with simple lessons on exercise, health, and balance.",
    "infoParagraph1": "This course introduces basic wellness ideas in an accessible and practical way. It helps learners understand how small daily choices related to movement, sleep, nutrition, and routine can make a meaningful difference over time.",
    "infoParagraph2": "The goal is not extreme fitness or unrealistic plans, but rather balanced and sustainable habits that support better health. It is suitable for beginners who want a simple introduction to healthier living without complicated technical language.",
    "materials": [
      "Wellness checklist",
      "Fitness planning guide",
      "Habit tracking sheet",
      "Healthy routine notes"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Healthy Lifestyle and Fitness",
      "videoUrl": "https://www.youtube.com/embed/1g4Bh8xkM2Q",
      "description": "This module introduces the meaning of a healthy lifestyle and explains how fitness, routine, sleep, and daily habits all work together to support long-term wellness."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Healthy Daily Habits",
          "content": "Healthy daily habits are the small repeated actions that support physical and mental well-being over time. These include regular sleep, drinking enough water, balanced meals, movement during the day, and consistency in basic routines. Good health is often built through these everyday choices rather than through occasional extreme effort. Small habits may seem simple, but when they are repeated regularly, they have a strong long-term effect.\n\nDaily habits matter because they shape energy, focus, mood, and overall wellness. A person does not need perfect behavior every day in order to become healthier. What matters more is building realistic patterns that can continue over time. Healthy habits create a stable foundation that supports a better lifestyle in a practical and sustainable way.",
          "isOpen": false
        },
        {
          "title": "Exercise Basics",
          "content": "Exercise is structured physical activity that helps improve strength, endurance, flexibility, and general health. It can include walking, stretching, strength training, or other forms of movement depending on a person’s level and goals. For beginners, exercise does not need to be intense to be valuable. Even moderate regular movement can improve health in meaningful ways.\n\nThe main idea behind exercise basics is consistency and safe progression. The body responds better when activity is introduced gradually and performed with proper form and rest. Good exercise habits are built by choosing realistic effort, staying regular, and allowing time for recovery. This approach helps people avoid injury, build confidence, and make movement a lasting part of daily life.",
          "isOpen": false
        },
        {
          "title": "Balance and Sustainability",
          "content": "Balance in a healthy lifestyle means building habits that support health without becoming extreme or unrealistic. Many people begin with strict plans that are hard to maintain, so they lose motivation quickly. Sustainability means choosing routines that fit real life and can continue over a long period of time. A healthy lifestyle becomes much stronger when it is practical enough to last.\n\nThis is why steady progress is often more valuable than perfect short-term effort. A balanced approach gives room for flexibility while still supporting good choices. Sustainable habits help people continue improving even during busy or difficult periods. In the long run, consistency and realism usually create better results than strict plans that cannot be maintained.",
          "isOpen": false
        }
      ]
    },
    "notes": "This is a beginner-friendly course for learners who want a practical and balanced introduction to healthier daily living."
  },
  {
    "id": "9",
    "title": "Cloud Computing Essentials",
    "subtitle": "Understand cloud services, infrastructure ideas, and the main concepts behind modern digital systems and platforms.",
    "instructor": "Microsoft",
    "category": "it-software",
    "level": "advanced",
    "price": "84.99",
    "rating": "4.8",
    "language": "english",
    "learningType": "professional_certificate",
    "image": "../img/cloud.jpg",
    "description": "Understand cloud services, deployment models, and practical infrastructure concepts.",
    "infoParagraph1": "This course introduces the foundations of cloud computing and explains why modern systems increasingly rely on cloud-based services and infrastructure. It helps learners understand the vocabulary and core ideas behind this important technology area.",
    "infoParagraph2": "Students will explore the main cloud models, common service types, and the role of scalability, flexibility, and remote infrastructure in modern software environments. The course is useful for those who want a clearer introduction to cloud systems before moving toward more technical study.",
    "materials": [
      "Cloud architecture notes",
      "Deployment model chart",
      "Case study examples",
      "Infrastructure glossary"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Cloud Computing",
      "videoUrl": "https://www.youtube.com/embed/M988_fsOSWo",
      "description": "This module explains what cloud computing means, why it became important, and how cloud platforms changed the way digital services are built and delivered."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Cloud Service Models",
          "content": "Cloud service models describe the different ways cloud providers offer technology resources to users. The three main models are IaaS, PaaS, and SaaS. Infrastructure as a Service provides basic resources such as servers, storage, and networking. Platform as a Service gives users a development environment where they can build and deploy applications more easily. Software as a Service delivers complete software applications directly through the internet.\n\nThe main difference between these models is the level of control and responsibility given to the user. In IaaS, the user manages more of the system, while in SaaS most of the technical work is handled by the provider. Understanding these models helps learners see how cloud services are structured and why different organizations choose different options depending on their needs.",
          "isOpen": false
        },
        {
          "title": "Deployment Models",
          "content": "Deployment models describe where cloud systems are hosted and who is allowed to use them. The main models are public cloud, private cloud, and hybrid cloud. A public cloud is shared infrastructure provided over the internet to many users. A private cloud is dedicated to a single organization, offering greater control and often more customization. A hybrid cloud combines elements of both public and private environments.\n\nEach deployment model is chosen based on factors such as cost, privacy, flexibility, and performance. Public cloud is often popular because it is convenient and easier to scale, while private cloud may be preferred when stronger control or security is needed. Hybrid cloud offers a balanced option that allows organizations to divide workloads across different environments. These models show that cloud computing can be adapted in several ways to match real business needs.",
          "isOpen": false
        },
        {
          "title": "Scalability and Infrastructure",
          "content": "Scalability means a system can grow or shrink depending on demand. In cloud computing, this is one of the biggest advantages because resources such as storage, processing power, and services can be adjusted more flexibly than in traditional systems. This allows businesses to handle growth, traffic changes, and new workloads without needing to rebuild everything from the beginning.\n\nCloud infrastructure refers to the underlying resources that make cloud services possible, including servers, storage systems, networking, and virtualization technology. Instead of owning and managing all physical hardware directly, organizations can use these resources on demand through cloud providers. Understanding scalability and infrastructure helps learners see why cloud computing plays such an important role in modern software systems and digital services.",
          "isOpen": false
        }
      ]
    },
    "notes": "This course is suitable for learners interested in modern IT systems, platforms, and cloud-based technologies."
  }
]
`;

var courses = JSON.parse(jsonData);

let detailsHero = document.getElementById("DetailsHero");
let heroTitle = document.getElementById("HeroTitle");
let heroSubtitle = document.getElementById("HeroSubtitle");
let sidebarCourseImage = document.getElementById("SidebarCourseImage");
let sidebarCourseTitle = document.getElementById("SidebarCourseTitle");
let sidebarCourseInstructor = document.getElementById("SidebarCourseInstructor");
let sidebarMenu = document.getElementById("SidebarMenu");
let detailsContent = document.getElementById("DetailsContent");

let params = new URLSearchParams(window.location.search);
let courseId = params.get("id");

let selectedCourse = null;
let module1WatchedKey = "module1Watched_" + courseId;
let module1Watched = JSON.parse(localStorage.getItem(module1WatchedKey)) || false;


function formatText(text) {
  return text
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
}

function getSelectedCourse() {
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id === courseId) {
      selectedCourse = courses[i];
      break;
    }
  }
}

function renderHero() {
  heroTitle.textContent = selectedCourse.title;
  heroSubtitle.textContent = selectedCourse.subtitle;
  detailsHero.style.backgroundImage = 'url("' + selectedCourse.image + '")';

  sidebarCourseImage.src = selectedCourse.image;
  sidebarCourseImage.alt = selectedCourse.title;
  sidebarCourseTitle.textContent = selectedCourse.title;
  sidebarCourseInstructor.textContent = selectedCourse.instructor;
}

function updateModule2State() {
  let module2Button = document.querySelector('.SidebarItem[data-section="module-2"]');

  if (!module2Button) {
    return;
  }

  if (module1Watched) {
    module2Button.disabled = false;
    module2Button.classList.remove("LockedItem");
    module2Button.textContent = "Module 2";
  } else {
    module2Button.disabled = true;
    module2Button.classList.add("LockedItem");
    module2Button.textContent = "Module 2 (Locked)";
  }
}

function renderInfo() {
  let html = `
    <h2 class="ContentSectionTitle">Course Info</h2>

    <div class="InfoGrid">
      <div class="InfoCard">
        <h4>Instructor</h4>
        <p>${selectedCourse.instructor}</p>
      </div>

      <div class="InfoCard">
        <h4>Category</h4>
        <p>${formatText(selectedCourse.category)}</p>
      </div>

      <div class="InfoCard">
        <h4>Level</h4>
        <p>${formatText(selectedCourse.level)}</p>
      </div>

      <div class="InfoCard">
        <h4>Language</h4>
        <p>${formatText(selectedCourse.language)}</p>
      </div>

      <div class="InfoCard">
        <h4>Learning Type</h4>
        <p>${formatText(selectedCourse.learningType)}</p>
      </div>

      <div class="InfoCard">
        <h4>Price</h4>
        <p>$${parseFloat(selectedCourse.price).toFixed(2)}</p>
      </div>
    </div>

    <p class="ContentParagraph">${selectedCourse.infoParagraph1}</p>
    <p class="ContentParagraph">${selectedCourse.infoParagraph2}</p>
  `;

  detailsContent.innerHTML = html;
}

function renderMaterials() {
  let html = "<h2 class='ContentSectionTitle'>Course Materials</h2>";
  html += "<div class='ListBlock'>";

  for (let i = 0; i < selectedCourse.materials.length; i++) {
    html += "<div class='ListItem'>";
    html += "<h4>Material " + (i + 1) + "</h4>";
    html += "<p>" + selectedCourse.materials[i] + "</p>";
    html += "</div>";
  }

  html += "</div>";

  detailsContent.innerHTML = html;
}

function renderModule1() {
  let watchedButtonText = "Mark as Watched";

  if (module1Watched == true) {
    watchedButtonText = "Watched";
  }

  let html = "";
  html += "<h2 class='ContentSectionTitle'>" + selectedCourse.module1.title + "</h2>";
  html += "<div class='ModuleCard'>";
  html += "<h3>" + selectedCourse.module1.videoTitle + "</h3>";
  html += "<div class='VideoWrapper'>";
  html += "<iframe ";
  html += "src='" + selectedCourse.module1.videoUrl + "' ";
  html += "title='" + selectedCourse.module1.videoTitle + "' ";
  html += "frameborder='0' ";
  html += "allowfullscreen>";
  html += "</iframe>";
  html += "</div>";
  html += "<div class='ModuleActionRow'>";
  html += "<p class='ContentParagraph ModuleVideoText'>" + selectedCourse.module1.description + "</p>";
  html += "<button id='WatchedBtn' class='Btn Btn1' type='button'>" + watchedButtonText + "</button>";
  html += "</div>";
  html += "</div>";

  detailsContent.innerHTML = html;

  let watchedBtn = document.getElementById("WatchedBtn");

  if (watchedBtn != null) {
    watchedBtn.addEventListener("click", markModule1Watched);
  }
}

function renderModule2() {
  if (module1Watched == false) {
    detailsContent.innerHTML =
      "<div class='ModuleCard'>" +
      "<h2 class='ContentSectionTitle'>Module 2</h2>" +
      "<p class='ContentParagraph'>Module 2 is locked. Please watch Module 1 first, then press the watched button to unlock this section.</p>" +
      "</div>";
    return;
  }

  let html = "<h2 class='ContentSectionTitle'>" + selectedCourse.module2.title + "</h2>";
  html += "<div class='AccordionBlock'>";

  for (let i = 0; i < selectedCourse.module2.sections.length; i++) {
    html += "<div class='AccordionItem'>";
    html += "<button class='AccordionHeader' type='button' data-index='" + i + "'>";
    html += "<span>" + selectedCourse.module2.sections[i].title + "</span>";
    html += "<span class='AccordionArrow'>▼</span>";
    html += "</button>";
    html += "<div class='AccordionContent'>";
    html += "<p>" + selectedCourse.module2.sections[i].content.replace(/\\n\\n/g, "</p><p class='AccordionText'>") + "</p>";
    html += "</div>";
    html += "</div>";
  }

  html += "</div>";

  detailsContent.innerHTML = html;

  attachAccordionEvents();
}

function markModule1Watched() {
  module1Watched = true;
  localStorage.setItem(module1WatchedKey, JSON.stringify(true));
  updateModule2State();
  renderModule1();
}

function attachAccordionEvents() {
  let accordionHeaders = document.querySelectorAll(".AccordionHeader");

  for (let i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].addEventListener("click", function () {
      let accordionItem = this.closest(".AccordionItem");
      let accordionContent = accordionItem.querySelector(".AccordionContent");
      let arrow = accordionItem.querySelector(".AccordionArrow");

      if (accordionContent.classList.contains("OpenAccordion")) {
        accordionContent.classList.remove("OpenAccordion");
        arrow.textContent = "▼";
      }
      else {
        accordionContent.classList.add("OpenAccordion");
        arrow.textContent = "▲";
      }
    });
  }
}

function renderNotFound() {
  detailsHero.style.backgroundImage = "none";
  heroTitle.textContent = "Course Not Found";
  heroSubtitle.textContent = "The course you are looking for does not exist or the link is not correct.";

  let html = "";
  html += "<div class='EmptyCourseState'>";
  html += "<h2>Course Not Found</h2>";
  html += "<p>We could not find the requested course details.</p>";
  html += "<a href='courses.html' class='Btn Btn1'>Back to Courses</a>";
  html += "</div>";

  detailsContent.innerHTML = html;
}
function renderNotes() {
  let html = "";
  html += "<h2 class='ContentSectionTitle'>Notes</h2>";
  html += "<div class='ModuleCard'>";
  html += "<p class='ContentParagraph'>" + selectedCourse.notes + "</p>";
  html += "</div>";

  detailsContent.innerHTML = html;
}

function renderSection(section) {
  if (section == "info") {
    renderInfo();
  }
  else if (section == "materials") {
    renderMaterials();
  }
  else if (section == "module-1") {
    renderModule1();
  }
  else if (section == "module-2") {
    renderModule2();
  }
  else if (section == "notes") {
    renderNotes();
  }
}

function setActiveSidebarItem(section) {
  let allItems = document.querySelectorAll(".SidebarItem");

  for (let i = 0; i < allItems.length; i++) {
    allItems[i].classList.remove("active");

    if (allItems[i].dataset.section == section) {
      allItems[i].classList.add("active");
    }
  }
}

function handleSidebarClick(event) {
  let clickedItem = event.target.closest(".SidebarItem");

  if (!clickedItem) {
    return;
  }

  if (clickedItem.disabled) {
    return;
  }

  let section = clickedItem.dataset.section;
  setActiveSidebarItem(section);
  renderSection(section);
}

getSelectedCourse();

if (selectedCourse == null) {
  renderNotFound();
}
else {
  renderHero();
  updateModule2State();
  renderInfo();
  sidebarMenu.addEventListener("click", handleSidebarClick);
}