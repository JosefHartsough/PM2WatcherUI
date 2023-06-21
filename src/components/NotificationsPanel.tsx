import { VITE_SLACK_WEBHOOK_URL } from "../config";
export default function NotificationsPanel() {
  return (
    <div>
      Current Slack webhookurl:
      {VITE_SLACK_WEBHOOK_URL}
      <br /> *** This can be changed in the env variable VITE_SLACK_WEBHOOK_URL
    </div>
  );
}
