const { Configuration, OpenAIApi } = require("openai");
export default async function  handler(req, res) {
    const {name, unternehmen, stelle, skills, sonstiges, ausbildung} = req.body
    
    
    const configuration = new Configuration({
    apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Erstelle ein Bewerbungsschreiben mit mindestens 200 Wörtern für ${name} als ${stelle}. Meine Ausbildung ist: ${ausbildung}. Meine Stärken sind ${skills}.${sonstiges && `Erwähne, dass ${sonstiges}`} Das Unternehmen heißt ${unternehmen}. Nicht erwähnen, dass keine Berufserfahrung vorliegt, falls ich noch keine Arbeitserfahrung habe. Erwähne meinen Namen nur am Schluss`,
    max_tokens: 3000,
    temperature: 0.8,
    });    
    res.json(response.data.choices[0].text)

  }