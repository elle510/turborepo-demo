import React, { useCallback } from 'react';
import { NextPage } from 'next';

import { Button, Card, Link } from 'ui';
// import { useTest } from "hooks";
import useTest from 'hooks/useTest';

// TODO:
// 1. packages 안에 프로젝트 생성하는 명령어(배포하는 프로젝트, 배포안하는 프로젝트)
// 2. apps 에서 새로 추가된 packages 설치하는 방법
const Web: NextPage = () => {
  const [value, onChange] = useTest('test');

  const handleChange = useCallback(() => {
    onChange(`test${Math.random()}`);
  }, [onChange]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Web</h1>
      <Button />
      <div>
        {value} <br />
        <button onClick={handleChange}>Click!!</button>
      </div>
      <div>
        <Link className="App-link" href="https://turbo.build/repo">
          Turborepo Docs
        </Link>
        <span> | </span>
        <Link className="App-link" href="https://reactjs.org">
          React Docs
        </Link>
      </div>
      <Card title="Title" href="http://naver.com" cta="cta content" />
    </div>
  );
};

export default Web;
