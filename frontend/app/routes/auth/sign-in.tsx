import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { signInSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input' 
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'



type SignInFormData = z.infer<typeof signInSchema>

const SignIn = () => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  }); 


  const handleSubmit = (values: SignInFormData) => {
    console.log(values);
  };
  return <div
    className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4"
    >
      
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader className="text-center mb-5">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6">
              <Controller 
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  {fieldState.error && (
                    <p className="text-destructive text-sm">{fieldState.error.message}</p>
                  )}
                    <Input type="email" placeholder="email@domain.com" {...field} />
                  
                </Field>
                
              )}
                />

                 <Controller 
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <Field>
                  <div className="flex items-center justify-between">
                  <FieldLabel>Password</FieldLabel>
                  <Link to="/forgot-password" className="text-sm hover:underline text-blue-600">
                    Forgot Password?
                  </Link>
                  </div>
                  {fieldState.error && (
                    <p className="text-destructive text-sm">{fieldState.error.message}</p>
                  )}
                    <Input type="password" placeholder="••••••••" {...field} />
                  
                </Field>
                
              )}
                />
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>

             
          <CardFooter className="flex items-center justify-center mt-6">
            <div className="flex items-center justify-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account? <Link to="/sign-up" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardFooter>
          

        </CardContent>

    </Card>
  </div>
};

export default SignIn



