import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/providers/authProvider";
import dbConnect from "@/services/dbConnect";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import "../styles/globals.css";
import Error from "./(main)/error";
import MainLayoutView from "@/components/layouts/main-layout";

const CommonLayout = async ({ children }) => {
    await dbConnect()

    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <ErrorBoundary fallback={<Error />}>
                        <MainLayoutView>
                            {children}
                        </MainLayoutView>
                    </ErrorBoundary>
                    <Toaster richColors position="top-center" />
                </AuthProvider>
            </body>
        </html>
    );
};
export default CommonLayout;