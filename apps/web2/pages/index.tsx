import React, { useCallback } from 'react';
import { NextPage } from 'next';
import tw from 'twin.macro';

import { Button, Card, Link } from 'ui';
import { Card as TailCard } from 'ui-tailwind';
// import { useTest } from "hooks";
import useTest from 'hooks/useTest';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
};

const Web: NextPage = () => {
  const [value, onChange] = useTest('test');

  const handleChange = useCallback(() => {
    onChange(`test${Math.random()}`);
  }, [onChange]);

  return (
    <div css={styles.container({ hasBackground: true })}>
      <h1 className="text-3xl font-bold underline">Web</h1>
      <Button />
      <div tw="flex flex-col justify-center h-full gap-y-5">
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
      <TailCard title="Tail-Title" href="http://naver.com" cta="cta content" />
    </div>
  );
};

export default Web;
