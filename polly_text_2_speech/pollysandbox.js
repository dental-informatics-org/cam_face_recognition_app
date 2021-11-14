// Load the SDK
const AWS = require('aws-sdk')
const Stream = require('stream')
const Speaker = require('speaker')
const Fs = require('fs')

// Create an Polly client
const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1'
})

// AI identification code. Bring back the patient ID
// https://eclluovs6c.execute-api.us-east-1.amazonaws.com/devig1/patient/patientID
resp = {
patient: "Alex",
  info: {
  scheduleTime: "10AM",
  treatment: "Implant Surgery",
  age: 30
  }
}

let params = {
    'Text': `Hello, ${resp.patient}! Welcome to our clinic. My name is Sophia. I am an artificial intelligence from doctors Igor Dental Office. I see that you have an appointment at ${resp.info.scheduleTime} for a implant surgery. I will inform the doctor that you have arrived. Please take your seat at the reception room. A dental assistant will see you in some minutes. If you want to drink a coffee I will request our coffee machine to prepare a cup to you. Do you want expresso or caputino? I can control the temperature room and light as you want. Please say a temperature and a percentage of brightness that will make you confortable. By the way, do you feel well today? Did you get contact with someone with covid 19 in the past 15 days? `,
    'OutputFormat': 'pcm',
    'LanguageCode': 'arb',
    'VoiceId': 'Kimberly'
}

// Save file n the root
// Polly.synthesizeSpeech(params, (err, data) => {
//     if (err) {
//         console.log(err.code)
//     } else if (data) {
//         if (data.AudioStream instanceof Buffer) {
//             Fs.writeFile("./speech.mp3", data.AudioStream, function(err) {
//                 if (err) {
//                     return console.log(err)
//                 }
//                 console.log("The file was saved!")
//             })
//         }
//     }
// })

// Stream To Speaker
// Create the Speaker instance
const Player = new Speaker({
  channels: 1,
  bitDepth: 16,
  sampleRate: 16000
})

Polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
        console.log(err.code)
    } else if (data) {
        if (data.AudioStream instanceof Buffer) {
            // Initiate the source
            var bufferStream = new Stream.PassThrough()
            // convert AudioStream into a readable stream
            bufferStream.end(data.AudioStream)
            // Pipe into Player
            bufferStream.pipe(Player)
        }
    }
})