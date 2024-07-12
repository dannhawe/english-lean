// data/communicationExercises.js
const communicationExercises = [
  {
    lesson: 'Bài Học 1: Báo cáo dự án',
    context:
      'John là một lập trình viên, anh đang tham gia một cuộc họp dự án với Maria, quản lý dự án của anh.',
    dialogue: [
      {
        person: 'Maria',
        text: 'Hi John, can you give me an update on the website project?',
      },
      {
        person: 'John',
        text: "Sure, Maria. We've just finished implementing the new user authentication system.",
      },
      {
        person: 'Maria',
        text: "That's great to hear. Are there any challenges you encountered?",
      },
      {
        person: 'John',
        text: "Yes, we had some issues with integrating the third-party API, but we've managed to resolve them.",
      },
      {
        person: 'Maria',
        text: 'Excellent. What’s the next step in the project?',
      },
      {
        person: 'John',
        text: "Next, we'll be working on optimizing the site for mobile devices.",
      },
      {
        person: 'Maria',
        text: 'Perfect. Do you need any additional resources or support?',
      },
      {
        person: 'John',
        text: 'It would be helpful to have another developer join the team to speed up the process.',
      },
      {
        person: 'Maria',
        text: "I'll see what I can do. Is there anything else you'd like to discuss?",
      },
      {
        person: 'John',
        text: 'Yes, I have a few questions about the design specifications. Can we schedule a meeting with the design team?',
      },
      {
        person: 'Maria',
        text: "Of course. I'll arrange a meeting for tomorrow afternoon. Anything else?",
      },
      { person: 'John', text: "That's all for now. Thank you, Maria." },
      {
        person: 'Maria',
        text: "You're welcome, John. Keep up the good work!",
      },
    ],
    structure: [
      'Greeting and opening a conversation',
      'Reporting progress and challenges',
      'Discussing next steps',
      'Offering and asking for help',
    ],
  },
  {
    lesson: 'Bài Học 2: Thảo luận về tiến độ và kế hoạch dự án',
    context: 'John và Maria tiếp tục thảo luận về tiến độ và kế hoạch dự án.',
    dialogue: [
      {
        person: 'Maria',
        text: 'Hi John, how is the progress on the mobile optimization?',
      },
      {
        person: 'John',
        text: "Hi Maria, we're making good progress. We've optimized the homepage and the login page so far.",
      },
      {
        person: 'Maria',
        text: 'That’s great. What’s your plan for the next steps?',
      },
      {
        person: 'John',
        text: 'We plan to optimize the remaining pages and then conduct a round of testing to ensure everything works smoothly.',
      },
      {
        person: 'Maria',
        text: 'Sounds good. Do you anticipate any challenges?',
      },
      {
        person: 'John',
        text: 'We might need to adjust some of the CSS for different screen sizes, but it should be manageable.',
      },
      {
        person: 'Maria',
        text: 'Okay, keep me posted on any issues. Do you need any additional help?',
      },
      {
        person: 'John',
        text: "Not at the moment, but I'll let you know if anything comes up.",
      },
      { person: 'Maria', text: 'Thanks, John. Keep up the great work!' },
    ],
    structure: [
      'Greeting and opening a conversation',
      'Discussing progress and next steps',
      'Anticipating challenges',
      'Keeping stakeholders informed',
    ],
  },
  {
    lesson: 'Bài Học 3: Báo cáo lỗi và giải pháp',
    context: 'John gặp vấn đề kỹ thuật và báo cáo cho Maria.',
    dialogue: [
      {
        person: 'John',
        text: "Hi Maria, I need to discuss a technical issue we're facing.",
      },
      { person: 'Maria', text: "Sure, John. What's the issue?" },
      {
        person: 'John',
        text: "We’ve encountered a bug in the user authentication system. Some users can't log in.",
      },
      {
        person: 'Maria',
        text: 'That’s concerning. Do you know what’s causing the bug?',
      },
      {
        person: 'John',
        text: 'It seems to be an issue with the token expiration handling.',
      },
      { person: 'Maria', text: 'Have you identified a solution?' },
      {
        person: 'John',
        text: 'Yes, we’re working on a fix now and plan to deploy it by tomorrow.',
      },
      {
        person: 'Maria',
        text: 'Good. Please prioritize this and keep me updated on the progress.',
      },
      { person: 'John', text: 'Will do. Thank you, Maria.' },
    ],
    structure: [
      'Reporting progress and plans',
      'Discussing technical issues and solutions',
      'Prioritizing tasks',
      'Keeping stakeholders informed',
    ],
  },
  {
    lesson: 'Bài Học 4: Họp với đội thiết kế',
    context:
      'John và Maria tham gia một cuộc họp với đội thiết kế để thảo luận về yêu cầu thiết kế.',
    dialogue: [
      {
        person: 'Maria',
        text: "Hi everyone, let's start the meeting. John has some questions about the design specifications.",
      },
      {
        person: 'John',
        text: 'Hi, I wanted to clarify the responsive design requirements for the mobile version.',
      },
      {
        person: 'Designer',
        text: 'Sure, John. What specific questions do you have?',
      },
      {
        person: 'John',
        text: 'How should we handle the navigation menu on smaller screens?',
      },
      {
        person: 'Designer',
        text: 'We recommend using a collapsible menu that expands when clicked.',
      },
      {
        person: 'John',
        text: 'Got it. Also, are there any specific color schemes we should follow?',
      },
      {
        person: 'Designer',
        text: 'Yes, please use the color palette provided in the design guidelines.',
      },
      {
        person: 'Maria',
        text: 'Thanks for the clarifications. John, do you have any more questions?',
      },
      { person: 'John', text: 'No, that covers it. Thank you.' },
      { person: 'Maria', text: 'Great. Let’s proceed with these updates.' },
    ],
    structure: [
      'Discussing design requirements',
      'Asking and answering specific questions',
      'Clarifying and confirming details',
    ],
  },
  {
    lesson: 'Bài Học 5: Báo cáo tiến độ hàng tuần',
    context: 'John cung cấp báo cáo tiến độ hàng tuần cho Maria.',
    dialogue: [
      {
        person: 'Maria',
        text: 'Hi John, can you give me the weekly progress report?',
      },
      {
        person: 'John',
        text: "Hi Maria, sure. We've completed the mobile optimization and fixed the user authentication bug.",
      },
      { person: 'Maria', text: 'That’s excellent news. Any other updates?' },
      {
        person: 'John',
        text: "We also started integrating the new payment gateway and it's progressing well.",
      },
      { person: 'Maria', text: 'Great job. Are there any pending issues?' },
      { person: 'John', text: 'Not at the moment. Everything is on track.' },
      {
        person: 'Maria',
        text: 'Perfect. Keep up the good work and update me if anything changes.',
      },
      { person: 'John', text: 'Will do. Thanks, Maria.' },
    ],
    structure: [
      'Providing regular progress updates',
      'Reporting completed tasks',
      'Discussing new developments',
      'Ensuring no pending issues',
    ],
  },
  {
    lesson: 'Bài Học 6: Đánh giá hiệu suất và phản hồi',
    context: 'Maria đánh giá hiệu suất của John và cung cấp phản hồi.',
    dialogue: [
      {
        person: 'Maria',
        text: 'Hi John, I’d like to discuss your performance on the project.',
      },
      { person: 'John', text: 'Hi Maria, sure. I’m ready for your feedback.' },
      {
        person: 'Maria',
        text: 'You’ve done an excellent job with the mobile optimization and bug fixes. Your work has been crucial for the project’s success.',
      },
      { person: 'John', text: 'Thank you, Maria. I appreciate the feedback.' },
      {
        person: 'Maria',
        text: 'I also noticed that you manage to handle challenges effectively. Keep up the great work.',
      },
      { person: 'John', text: 'Thanks, Maria. I’ll continue to do my best.' },
      {
        person: 'Maria',
        text: 'Is there anything you feel you need to improve or need support with?',
      },
      {
        person: 'John',
        text: 'I’d like to learn more about backend development. Could we arrange some training sessions?',
      },
      {
        person: 'Maria',
        text: 'Absolutely. I’ll set up a few training sessions for you.',
      },
      { person: 'John', text: 'Thank you, Maria. I look forward to it.' },
    ],
    structure: [
      'Providing performance feedback',
      'Acknowledging achievements',
      'Offering support and resources',
      'Discussing areas for improvement',
    ],
  },
]

export default communicationExercises
