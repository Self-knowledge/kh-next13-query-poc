import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import styles from '@/styles/Home.module.css';

type FormValues = {
  userName: string;
};

export default function ProfileSignUp() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm<FormValues>({
    defaultValues: { userName: '' },
  });

  // NOTE: 영숫자 및 한글(자음 O, 모음 X)만 허용
  const userNameRegex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]*$/;
  const watchUserName = watch('userName');

  const router = useRouter();

  function onSubmit(formData: FormValues) {
    console.log(formData);
    router.replace('/poc/congrat-sign-up');
  }

  return (
    <div className={styles.main}>
      <Link href="/">Home</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("userName", {
            required: true,
            maxLength: 8,
            pattern: userNameRegex,
          })}
          placeholder="닉네임을 입력하세요"
        />
        <div>
          {errors.userName?.type === 'required' && <span>반드시 이름을 적어주세요.</span>}
          {errors.userName?.type === 'maxLength' && <span>이름은 최대 8글자까지 가능합니다.</span>}
          {errors.userName?.type === 'pattern' && <span>특수 문자는 사용할 수 없습니다.</span>}
        </div>
        <div>
          <input
            type="submit"
            value="가입하기"
            disabled={!watchUserName || watchUserName.trim().length === 0}
          />
        </div>
      </form>
    </div>
  );
}
