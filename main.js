/*
// NAME: The Unhelpful Bot
// CONTRIBUTORS: Steph Koopmanschap
// VERSION: 1.0
*/

var MessageContainer = document.querySelector('.messagesContainer');
var InputElement = document.getElementById('input');
InputElement.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getInput();
    }
});

const BotResponses = ["This is noted.",
                      "Thank you for patiently waiting. We've already esclated your concern.",
                      "For now, we will just have to wait for the update of our back-end support regarding your concern.",
                      "Don't worry we already indicated it as high priority so that it will be given action immediately.",
                      "For future concerns and reference, you can download our App",
                      "Allow us a few minutes to escalate this out for you. This may take some time, please bear with us for a moment.",
                      "As per checking, we're sorry to inform you that the pending ticket on your account is still open.",
                      "Allow us a few minutes to check your account. Please stay connected.",
                      "We know the importance of being assisted immediately. As checked there is already a follow up report for your request.",
                      "We assure you that we are doing everything to fix this situation for you. In the meantime, please stick with us and keep your lines open for any update and feedback regarding this.",
                      "We're sorry to inform you that your provided reference number 123456789 can't pull up on our system.",
                      "Sorry, I don't see any open cases on your account...",
                      "Sorry, but I couldn't understand that.",
                      "I see you have submitted a request. You may check the status in our App.",
                      "You may check the status of your request in our App.",
                      "You have an open case. Please wait for a customer service representative to reach out to you.",
                      "This is already noted and escalated.",
                      "Please keep 123456789 as reference. Thank you for understanding!",
                      "This is already escalated to our support group.",
                      "We are aware of your concern and steps are now being taken to address this matter.",
                      "Don't worry, we will take note of this. Rest assured that we will be doing our best to provide optimum service to all our customers.",
                      "We understand how important this is for you. We will ensure that this issue will be resolved in the soonest time possible and avoid the same incident in the future. Hoping for your patience and understanding regarding this matter.",
                      "This reference number is on process.",
                      "We forward this to our support group for escalation and follow up.",
                      "We already forwarded this concern to our support group for follow up.",
                      "Thank you for the information. We will forward this to our support group for escalation.",
                      "Please be advised that the request should be coming from the listed customer and your account should be currently active.",
                      "We're sorry for the inconvenience.",
                      "We're here to assist you. Please give us a minute while we're checking on our resources. Would that be okay?",
                      "You have an open case.",
                      "Please wait for a customer service representative to reach out to you",
                      "Let me send a follow up request to our team.",
                      "Did this help you?",
                      "I can check your account for open tickets and connect you with a Care Specialist if needed.",
                      "Can you describe the issue you are experiencing?",
                      "We're here to help.",
                      "Can I help you with anything?",
                      "May we know if have you tried basic troubleshooting?",
                      "Thank you. Please give us another minute to check on this.",
                      "As per checking on our system your request is already canceled due to a system error on our end. But no worries, we will create a new request.",
                      "May we know if you have a reference number regarding your follow-up concern?",
                      "Please bear with us we are still checking on your account.",
                      "Alright. Please give us a minute to check on this.",
                      "Thank you. May we know if your concern is still the same?",
                      "We understand your concern.",
                      "We sincerely apologize for this kind of situation.",
                      "Since your request is still ongoing and within acceptable given calendar time, please anticipate any feedback and updates from our technical team.",
                      "We will coordinate this with our higher assigned team to expedite the completion of your request.",
                      "It is still within processing day. No worries, we will make sure that your problem will be solved as soon as possible and won't take any longer",
                      "Our technical team already contacted you for the procedure",
                      "That is only for the acknowledgement of your request, a proper creation and forwarding of your request through our App into our system",
                      "Kindly anticipate any feedback and updates as the given time for processing is 7 to 10 working days.",
                      "Upon checking, your request is still ongoing.",
                      "Since it is still within turnaround time, kindly anticipate of any feedback and updates from our assigned team as soon as possible.",
                      "Please be informed that the request may take 7 to 10 working days, Saturday and Sunday is not included",
                      "Rest assured that this will be resolved immediately as indicated with the given time.",
                      "As we checked, you have a pending work order number 123456789 for a request.",
                      "Thank you for your understanding. Please let us know how can we help you further.",
                      "We got your concern. No worries, we will help you with this.",
                      "Please give us some minutes to pull up the account and check the details for you.",
                      "As much as we'd love to help you with your request, we are very sorry but we cannot proceed with the transaction.",
                      "The information you have shared with us did not match our records. But no worries you can reach us tomorrow once the needed information to verify the account is already at hand.",
                      "For future reference and should you need additional support, please check the following reference number: 123456789",
                      "Just download the app in Google Play Store or Apple store. The device must be at least version 4 for Android devices and iOS 8 for Apple devices.",
                      "May we ask if you have a refence regarding your current or previous request?",
                      "We are glad to assist you for today.",
                      "We will notify you via SMS or call for the update and status of your request. Thank you.",
                      "Got that. Based on our system, your request is still on going. Thank you for kindly understanding.",
                      "No worries, we will notify you regarding your request.",
                      "Here's your reference number 123456789. Thank you.",
                      "We're here to support you",
                      "If you have further concerns, kindly leave us a message.",
                      "Please be advised that the processing of the request is within 3 to 5 working days",
                      "Hi, thanks for contacting us. We've received your message and appreciate you reaching out.",
                      "Is there anything else I can help you with?",
                      "You can search your nearest branch via location or any address you provide. We will even guide you on how to get there.",
                      "Whenever you need us, we're here for you and your needs.",
                      "Please note our Customer Service team will get back to you within 24 to 48 hours",
                      "Don't worry! If you face any difficulty, just visit our branch and ask for help to a branch personnel.",
                      "My apologies, I was not able to understand what you asked for.",
                      "My Apologies, I could not find an appropriate match for this. Could you please help rephrase your question?",
                      "What are you looking for?",
                      "You can view your Statement using our App",
                      "Thank you for reaching out to us.",
                      "Due to the high volume of messages, a member of our team will be with you as soon as possible.",
                      "We would like to inform you that we are unable to provide you the reason why your online account opening application has been failed/rejected as this is internal to the company.",
                      "Can you say that again?",
                      "Please read the user guide linked on the homepage of the registration portal for the requirements and procedure."
                ];

//keyword responses not used yet
var BotKeyWordRespones = {"bye": "Stay safe and have a nice day!",
                          "hello": "Hi, I am your automated Digital Assistant.",
                          "help": "We are glad to assist you for today."};

const BotIntro = "Hi, I am your automated Digital Assistant. How can I help?";

//returns a random integer between min and max
function randIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//get user input
function getInput() {
    let userMessage = InputElement.value;
    //clear the input field
    InputElement.value = '';
    //if nothing is entered in the field then do nothing
    //Use .trim() in case the user enters multiple spaces. Which is still empty.
    if (userMessage.trim() === "") {
        return 0;
    }
    addMessage(userMessage, "user");
    botResponse();
}

function botResponse() {
    let botResponse;
    if (isFirstMessage === false) {
        let responseSelector = randIntRange(0, BotResponses.length);
        botResponse = BotResponses[responseSelector];
    } else {
        botResponse = BotIntro;
    }
    addMessage(botResponse, "bot");
    isFirstMessage = false;
}

//add the message to the messaging container
function addMessage(message, type) {
    let newMessageElement = document.createElement("div");
    if (type === "user") {
        newMessageElement.setAttribute('class', "message userMessage");
    } 
    else if (type === "bot") {
        newMessageElement.setAttribute('class', "message computerMessage");
    }
    newMessageElement.innerHTML = message;
    MessageContainer.appendChild(newMessageElement);
}

function init() {
    isFirstMessage = true;
    botResponse();
}

init();