import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { signInSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldLabel } from '@base-ui/react/field'
import { Input } from '@/components/ui/input' 


type SignInFormData = z.infer<typeof signInSchema>

const SignIn = () => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  }); 


  const handleSubmit = (data: SignInFormData) => {
    console.log(data);
  };
  return <div
    className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4"
    >
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <Controller 
              control={form.control}
              name="email"
              render={({ field }) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  
                    <Input placeholder="Enter your email" {...field} />
                  
                </Field>
              )}
                />
              </form>
          

        </CardContent>

    </Card>
  </div>
};

export default SignIn



