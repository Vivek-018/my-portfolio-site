// API Response types
export interface VisitorResponse {
  count: number;
  success: boolean;
}

export interface VisitorErrorResponse {
  error: string;
}

// Visitor tracking types
export interface VisitorData {
  visitorId: string;
  ip: string;
  userAgent: string;
  hourKey: number;
}

// Database operation types
export interface CounterUpdateResult {
  count: number;
  lastUpdated: Date;
}

// Request processing types
export interface ProcessedRequest {
  ip: string;
  userAgent: string;
  visitorId: string;
  currentHour: number;
  visitorKey: string;
}
