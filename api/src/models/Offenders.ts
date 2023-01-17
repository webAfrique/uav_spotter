import mongoose from 'mongoose'

export type OffenderDocument = {
    pilotId: string
    firstName: string
    lastName: string
    phoneNumber: string
    createdDt: string
    email: string
    xCoord: number
    yCoord: number
    proximity: number
    timeStamp: number
}

const offenderSchema = new mongoose.Schema({
    pilotId: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    createdDt: String,
    email: String,
    xCoord: Number,
    yCoord: Number,
    proximity: Number,
    timeStamp: Number
})

export default mongoose.model<OffenderDocument>('Offender', offenderSchema)