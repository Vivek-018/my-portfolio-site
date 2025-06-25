import { NextRequest } from "next/server";
import { ProcessedRequest } from "@/types/visitor";

export function processVisitorRequest(request: NextRequest): ProcessedRequest {
  // Get client IP address for unique visitor tracking
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded
    ? forwarded.split(",")[0].trim()
    : request.headers.get("x-real-ip") || "unknown";

  // Get user agent for additional uniqueness
  const userAgent = request.headers.get("user-agent") || "";

  // Create a unique identifier
  const visitorId = `${ip}-${userAgent.slice(0, 50)}`;

  // Check if this is a new visitor (in the last hour)
  const now = Date.now();
  const currentHour = Math.floor(now / (1000 * 60 * 60)); // Hour-based uniqueness
  const visitorKey = `${visitorId}-${currentHour}`;

  return {
    ip,
    userAgent,
    visitorId,
    currentHour,
    visitorKey,
  };
}

export function isValidIP(ip: string): boolean {
  if (ip === "unknown") return false;

  // Basic IPv4 validation
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  // Basic IPv6 validation (simplified)
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

export function sanitizeUserAgent(userAgent: string): string {
  return userAgent.replace(/[<>]/g, "").slice(0, 200);
}
