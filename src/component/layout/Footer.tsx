'use client';

// component
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// hook
import Link from 'next/link';
import { FormEvent, useState } from 'react';

function Inner() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | '';
    message: string;
  }>({ type: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      setStatus({
        type: 'error',
        message: '내용을 입력하세요.',
      });
      return; // 조건이 true인 경우 if문 종료. false면 단계별로 하단 if문 실행
    }

    if (!formData.message.trim()) {
      setStatus({
        type: 'error',
        message: '내용을 입력하세요.',
      });
      return; // 조건이 true인 경우 if문 종료. false면 단계별로 하단 if문 실행
    }

    if (!executeRecaptcha) {
      setStatus({
        type: 'error',
        message: '보안 검증을 준비 중입니다. 잠시 후 다시 시도해주세요.',
      });
      return; // 조건이 true인 경우 if문 종료.
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const recaptchaToken = await executeRecaptcha('contact_form');

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('전송 완료');
        setStatus({
          type: 'success',
          message: '전송 완료',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errMsg = data.error || '전송 실패';
        alert('❌ ' + errMsg);
        setStatus({
          type: 'error',
          message: errMsg,
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: '오류가 발생했습니다. 나중에 다시 시도해주세요.',
      });
      console.error('전송 오류:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <footer
        className="p-8"
        data-aos="fade-down"
        data-aos-duration="1000"
        id="contact"
      >
        <div className="mx-auto max-w-2xl p-6">
          <h1 className="mb-6 text-3xl font-bold">문의하기</h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* 이름 (선택) */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                이름 (선택)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="홍길동"
              />
            </div>

            {/* 이메일 (필수) */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
              />
              <p className="mt-1 text-sm text-gray-500">답변을 받으실 이메일 주소를 입력해주세요</p>
            </div>

            {/* 메시지 (필수) */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                메시지 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="문의 내용을 입력해주세요"
                required
              />
            </div>

            {/* 전송 버튼 */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? '전송 중...' : '전송하기'}
            </button>

            {/* 상태 메시지 */}
            {status.message && (
              <div
                className={`rounded-lg p-4 ${
                  status.type === 'success'
                    ? 'border border-green-200 bg-green-50 text-green-800'
                    : 'border border-red-200 bg-red-50 text-red-800'
                }`}
              >
                {status.message}
              </div>
            )}

            {/* reCAPTCHA 안내 */}
            <p className="text-center text-xs text-gray-500">
              이 사이트는 reCAPTCHA로 보호되며, Google의
              <Link
                href="https://policies.google.com/privacy"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                개인정보 보호정책
              </Link>
              과
              <Link
                href="https://policies.google.com/terms"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                서비스 약관
              </Link>
              이 적용됩니다.
            </p>
          </form>
        </div>
      </footer>
    </>
  );
}

export default function Footer() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      <Inner />
    </GoogleReCaptchaProvider>
  );
}
