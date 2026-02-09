export function Footer() {
  return (
    <footer className="flex items-center justify-between mb-12 pt-6 border-t">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Patrick Silva
      </p>
      <p className="text-sm text-muted-foreground">Desenvolvedor de Software</p>
    </footer>
  );
}
