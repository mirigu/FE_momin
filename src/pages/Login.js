import React, { useState } from "react"
import { Button, Grid, Input, Text } from "../elements"
import { setCookie } from "../shared/Cookie"
import styled from "styled-components"

import { history } from "../redux/configureStore"
import { useDispatch } from "react-redux"
import { actionCreators as userActions } from "../redux/modules/user"
import { TokenToCookie } from "../shared/Cookie"
import instance from "../shared/Request"

const Login = (props) => {
  const dispatch = useDispatch()

  const [user_email, setUser_email] = useState()
  const [user_pwd, setUser_pwd] = useState()
  const [err_login, setErr_login] = useState("")

  const changeId = (e) => {
    setUser_email(e.target.value)
  }

  const changePwd = (e) => {
    setUser_pwd(e.target.value)
  }

  const login = () => {
    dispatch(userActions.logInDB(user_email, user_pwd))
  }

  const handleKeydown = (e) => {
    console.log("i'm in!1")
    if (e.key === "Enter") {
      console.log("i'm in!2")
      login()
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Grid padding="5%" is_flex>
          <Image src="https://firebasestorage.googleapis.com/v0/b/megazine-11a01.appspot.com/o/images%2Fmomin1.png?alt=media&token=474370a1-1e4b-4883-83e0-dda39b708bd3" />
          <Grid>
            <Text size="32px" bold>
              로그인
            </Text>
            <Grid padding="16px 0px">
              <Input
                label="아이디"
                placeholder="아이디를 입력해주세요."
                _onChange={changeId}
                _onKeyDown={handleKeydown}
              />
            </Grid>

            <Grid padding="16px 0px">
              <Input
                label="패스워드"
                placeholder="영문(대소문자) + 최소 1개의 숫자 혹은 특수 문자 8~20자"
                type="password"
                _onChange={changePwd}
                _onKeyDown={handleKeydown}
              />
            </Grid>

            <Button
              text="로그인하기"
              margin="10px 0px"
              padding="16px 0px"
              _onClick={login}
              disable={user_email === "" || user_pwd === "" ? true : false}
              bg="#5ad7c0"
            ></Button>
            <Grid is_flex justifyContent="center">
              <Text>
                계정이 없으신가요? &nbsp;
                <a href={"/signup"}>가입하기</a>
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0% 15%;
  @media only screen and (max-width: 768px) {
    padding: 0% 3%;
  }
`
const Image = styled.img`
  width: 50%;
  padding: 5%;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export default Login
