import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICES } from "../config/services";

export const authProxy = createProxyMiddleware({
  target: SERVICES.AUTH,
  changeOrigin: true,

});

export const leaveProxy = createProxyMiddleware({
  target: SERVICES.LEAVE,
  changeOrigin: true,
});

export const issueProxy = createProxyMiddleware({
  target: SERVICES.ISSUE,
  changeOrigin: true,
});

export const taskProxy = createProxyMiddleware({
  target: SERVICES.TASK,
  changeOrigin: true,
});

export const adminProxy = createProxyMiddleware({
  target: SERVICES.ADMIN,
  changeOrigin: true,
});
