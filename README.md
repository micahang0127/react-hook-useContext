### CustomHook, useContext()

    * useContext()
        1. createContext()
        2. Context.Provider
        3. useContext()  <br>
            or          <br>
            MyContext.Consumer    <br>

    * 기타
        - <li>  data-

            <br>
            `
            const toggleTodo = (e) => {
                const id = e.target.dataset.testName;
                changeTodoStatus(id);
            }

            const itemClassName = todo.checked === true ? 'done':'';
            return (
                // li에 data-blra 를 주면 e.target.dataset.blra 로 쓸수 있다.
                <li data-testName={todo.id} onClick={toggleTodo} className={itemClassName}>
                    {todo.text}
                </li>
            );
            `

        - +변수

            <br>
            `
                // [!] +id : + 를 붙이면 number를   string으로 바꿔줌
                if (todo.id === +id) {
                    if (todo.checked === true) todo.checked = false;
                    else todo.checked = true;
                }
            `

<br><br>
[추천] - VSC 확장 <br>

- GitLens <br>
- Import Cose <br>
  <br>
  [자료] <br>
  React Hook : <br>
  https://reactjs.org/docs/hooks-intro.html <br>
  https://github.com/gopinav/React-Tutorials <br>
  React-Router : <br>
  https://v5.reactrouter.com/web/api/Hooks/useroutematch<br>
  Docker - 강사님github : <br>
  https://github.com/myjungwu/djangoreactjs/blob/master/배포스크립트_nginx.txt <br>
  next 등 기타 : <br>
  https://kyounghwan01.github.io/blog/React/next/basic/#next-js가-제공하는-주요-기능 <br>
  https://www.youtube.com/c/Codevolution<br>
  <br>
  [강의자료] <br>
  주최 : 한국소프트웨어기술진흥협회 & HRD <br>
  기관 : 한국소프트웨어교육원 <br>
  유형 : 국가인적자원개발컨소시엄 <br>
  강사 : 백명숙 강사님 <br>
