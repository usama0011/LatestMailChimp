// models/LargeCampaign.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const ClickPerformanceEmailSchema = new Schema(
  {
    cpelink: { type: String, required: false },
    cpeclicks: { type: String, required: false },
    cpepercentage: { type: String, required: false },
    cpeuniquelinks: { type: String, required: false },
    cpeuniqueclickpercentage: { type: String, required: false },
  },
  { _id: false }
);

const EmailDomainPerformanceSchema = new Schema(
  {
    edpdomain: { type: String, required: false },
    edpemailCount: { type: String, required: false },
    edpemailPercentage: { type: String, required: false },
    edpbouncesCount: { type: String, required: false },
    edpbouncesPercentage: { type: String, required: false },
    edpopensCount: { type: String, required: false },
    edpopensPercentage: { type: String, required: false },
    edpclicksCount: { type: String, required: false },
    edpclicksPercentage: { type: String, required: false },
    edpunsubsCount: { type: String, required: false },
    edpunsubsPercentage: { type: String, required: false },
  },
  { _id: false }
);

const LargeCampaignSchema = new Schema(
  {
    campaignName: { type: String, required: false },
    campaignType: { type: String, required: false },
    lastEditDate: { type: String, required: false },
    editedByUsername: { type: String, required: false },
    sendTime: { type: String, required: false },
    audienceName: { type: String, required: false },
    audienceRecipients: { type: String, required: false },
    opened: { type: String, required: false },
    clicks: { type: String, required: false },
    openedPercentage: { type: String, required: false },
    clickedPercentage: { type: String, required: false },
    subject: { type: String, required: false },
    deliveredDate: { type: String, required: false },
    bounced: { type: String, required: false },
    unsubscribed: { type: String, required: false },
    successfulDeliveriesCount: { type: String, required: false },
    successfulDeliveriesPercentage: { type: String, required: false },
    clickPerUniqueOpens: { type: String, required: false },
    lastOpened: { type: String, required: false },
    lastClicked: { type: String, required: false },
    forwarded: { type: String, required: false },
    abuseReports: { type: String, required: false },
    orders: { type: String, required: false },
    averageOrderRevenue: { type: String, required: false },
    totalRevenue: { type: String, required: false },
    clickPerformanceLink: { type: String, required: false },
    clickPerformanceCount: { type: String, required: false },
    emailOne: { type: String, required: false },
    emailTwo: { type: String, required: false },
    emailThree: { type: String, required: false },
    tweets: { type: String, required: false },
    campaignUrlClicks: { type: String, required: false },
    clickPerformanceEmail: ClickPerformanceEmailSchema,
    emailDomainPerformance: EmailDomainPerformanceSchema,
  },
  { timestamps: true }
);

const LargeCampaign = mongoose.model("LargeCampaign", LargeCampaignSchema);
export default LargeCampaign;
