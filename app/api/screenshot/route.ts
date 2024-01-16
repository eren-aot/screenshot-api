import { type NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(request: NextRequest){

    const { searchParams } = new URL(request.url);
    // console.log(searchParams)
    const url =  searchParams.get("url")

    //Not NextResponse
    // if (!url) {
    //     // console.log("Hii there")
    //     return NextResponse.json({ error: 'URL is required' }, { status: 400 }) 
    //   }

      if (!url) {
        return new Response(JSON.stringify({ error: 'URL required' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }

      try {
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()
    
        await page.goto(url)
        await page.setViewport({ width: 1920, height: 1080 })
        await page.waitForSelector('body')
    
        const buffer = await page.screenshot({
          type: 'png',
          fullPage: true,
        })
    
        await browser.close();
        const screenshotBuffer = Buffer.from(buffer);
        const screenshotBase64 = screenshotBuffer.toString('base64');

        return new Response(JSON.stringify({
          screenshot: screenshotBase64
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        // return NextResponse.buffer(buffer, {
        //   status: 200,
        //   headers: {
        //     'Content-Type': 'image/png',
        //   },
        // })
    
      } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Unable to take screenshot' }, { status: 500 })
      }
    
    // console.log(url)
    // return Response.json(url);
}