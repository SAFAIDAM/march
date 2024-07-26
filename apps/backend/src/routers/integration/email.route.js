import { Router } from "express";
import { redirectGmailOAuthLoginController, getGmailAccessTokenController, setupPushNotificationsController } from "../../controllers/integration/email.controller.js";

const router = Router();

router.route("/connect/").get(redirectGmailOAuthLoginController);
router.route("/getAccessToken/").get(getGmailAccessTokenController);
router.route("/setup-notification/").get(setupPushNotificationsController);

// router.route("/watchLabels/").post(watchGmailLabelsController);
// router.route("/webhook/").post(processGmailWebhookController);

export default router;