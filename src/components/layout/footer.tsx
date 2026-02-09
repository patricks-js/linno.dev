export function Footer() {
  return (
    <footer className="flex items-center justify-between px-6">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Patrick Silva
      </p>
      <p className="text-sm text-muted-foreground">Desenvolvedor de Software</p>
    </footer>
  );
}
