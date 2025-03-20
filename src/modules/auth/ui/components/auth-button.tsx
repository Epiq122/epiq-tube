'use client';

import { Button } from '@/components/ui/button';
import { UserCircleIcon } from 'lucide-react';
import { SignInButton, SignedOut, UserButton, SignedIn } from '@clerk/nextjs';

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: 'w-10 h-10',
              userButtonPopoverCard: 'shadow-lg border border-gray-200',
              userButtonPopoverActions: 'p-2',
              userButtonPopoverActionButton: 'rounded-lg hover:bg-gray-100',
              userButtonPopoverFooter: 'border-t border-gray-200',
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button
            variant='outline'
            className='px-6 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none hover:bg-blue-50/50'
          >
            <UserCircleIcon className='w-5 h-5 mr-2' />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
