import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nominatorName,
      nominatorEmail,
      nomineeName,
      nomineeAge,
      nomineeCountry,
      category,
      achievement,
      message,
    } = body;

    // Validate required fields
    if (
      !nominatorName ||
      !nominatorEmail ||
      !nomineeName ||
      !nomineeAge ||
      !nomineeCountry ||
      !category ||
      !achievement
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate age range
    const age = parseInt(nomineeAge, 10);
    if (isNaN(age) || age < 5 || age > 25) {
      return NextResponse.json(
        { error: "Nominee age must be between 5 and 25" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(nominatorEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Connect to Neon database
    const sql = neon(process.env.DATABASE_URL!);

    // Ensure table exists
    await sql`
      CREATE TABLE IF NOT EXISTS nominations (
        id SERIAL PRIMARY KEY,
        nominator_name VARCHAR(255) NOT NULL,
        nominator_email VARCHAR(255) NOT NULL,
        nominee_name VARCHAR(255) NOT NULL,
        nominee_age INTEGER NOT NULL,
        nominee_country VARCHAR(100) NOT NULL,
        category VARCHAR(100) NOT NULL,
        achievement TEXT NOT NULL,
        message TEXT,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;

    // Insert nomination
    const result = await sql`
      INSERT INTO nominations (
        nominator_name,
        nominator_email,
        nominee_name,
        nominee_age,
        nominee_country,
        category,
        achievement,
        message
      ) VALUES (
        ${nominatorName},
        ${nominatorEmail},
        ${nomineeName},
        ${age},
        ${nomineeCountry},
        ${category},
        ${achievement},
        ${message || null}
      )
      RETURNING id, created_at
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Nomination submitted successfully",
        id: result[0].id,
        submittedAt: result[0].created_at,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Nomination submission error:", error);

    // If DATABASE_URL is not set, return a mock success for demo purposes
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        {
          success: true,
          message: "Nomination received (demo mode — database not configured)",
          id: Math.floor(Math.random() * 10000),
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit nomination. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Kidlon Talented Award Nomination API", status: "active" },
    { status: 200 }
  );
}
