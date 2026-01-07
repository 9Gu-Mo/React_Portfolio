// 이메일 전송 api

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { message, email, name } = await request.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: '메시지를 입력해주세요.' }, { status: 400 });
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: '올바른 이메일 주소를 입력해주세요.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER, // 보내는 이메일
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD, // 앱 비밀번호
      },
    });

    const fromName = name ? name : '웹 사이트 방문자';
    const from = `${fromName} <${process.env.NEXT_PUBLIC_EMAIL_USER}>`;

    const mailOption = {
      from: from,
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      replyTo: email || undefined,
      subject: `문의 - ${name || '익명'}`,
      text: `
보낸 사람: ${name || '익명'}
이메일: ${email || '미입력'}

메시지:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
              📧 새로운 문의가 도착했습니다
            </h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;">
                <strong style="color: #555;">보낸 사람:</strong> 
                <span style="color: #333;">${name || '익명'}</span>
              </p>
              
              <p style="margin: 10px 0;">
                <strong style="color: #555;">이메일:</strong> 
                ${
                  email
                    ? `<a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a>`
                    : '<span style="color: #999;">미입력</span>'
                }
              </p>
            </div>
            
            <div style="margin-top: 20px;">
              <p style="margin: 10px 0;"><strong style="color: #555;">메시지:</strong></p>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; border-left: 4px solid #4CAF50; margin-top: 10px;">
                <p style="margin: 0; white-space: pre-wrap; color: #333; line-height: 1.6;">${message}</p>
              </div>
            </div>
            
            ${
              email
                ? `
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  💡 <strong>답장하기:</strong> 이메일의 "답장" 버튼을 클릭하면 자동으로 ${email}로 답장이 발송됩니다.
                </p>
              </div>
            `
                : ''
            }
          </div>
          
          <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
            이 메시지는 웹사이트 문의 폼을 통해 전송되었습니다.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: '이메일 전송 실패' }, { status: 500 });
  }
}
