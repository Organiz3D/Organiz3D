{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "organiz3d";

  buildInputs = [
    pkgs.nodejs_latest
    pkgs.git
  ];

  shellHook = ''
    echo "✅ Environnement prêt"
    echo "📦 Node version: $(node -v)"
    echo "📁 Pour démarrer : npm install && npm run dev"
  '';
}