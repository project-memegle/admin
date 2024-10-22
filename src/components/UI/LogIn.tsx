import { forwardRef } from 'react';

type LogInProps = {
    loginId: string;
    password: string;
};

const LogIn = forwardRef<HTMLInputElement, LogInProps>(function LoginItem(
    props,
    ref
) {
    function loginClickHandler(e: React.FormEvent) {
        e.preventDefault();
    }

    return (
        <form onSubmit={loginClickHandler}>
            <div>
                <input
                    name="id"
                    className="id"
                    type="text"
                    placeholder="아이디"
                    // onChange={loginHandler}
                    ref={ref}
                />
            </div>
            <div>
                <input
                    name="password"
                    className="password"
                    type="password"
                    placeholder="비밀번호"
                    // onChange={loginHandler}
                />
            </div>
            <button className="login__button" type="submit">
                로그인
            </button>
        </form>
    );
});

export default LogIn;
