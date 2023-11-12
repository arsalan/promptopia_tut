import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type: String,
        required: [true, 'Prompt required to proceed.']
    },
    tag: {
        type: String,
        required: [true, 'Tag required to proceed.']
    },
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;