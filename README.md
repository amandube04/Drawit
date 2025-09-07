# 🎨 Diagram Tool

A clean, simple technical diagramming tool built with **Next.js**, **React**, and **tldraw**. Perfect for creating DSA diagrams, database schemas, system architecture, and more.

## ✨ Features

- **🎯 Simple & Clean** - Full-screen drawing canvas with no distractions
- **💾 Auto-Save** - Automatically saves your work to localStorage
- **🔄 Persistent** - Your diagrams survive page refreshes
- **🎨 Infinite Canvas** - Unlimited drawing space
- **🔧 Built-in Tools** - Shapes, arrows, text, sticky notes, and more
- **🌙 Dark/Light Mode** - Supports both themes automatically

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd diagram-tool
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework
- **[React 18](https://react.dev/)** - UI library
- **[tldraw 2.4](https://tldraw.dev/)** - Infinite canvas drawing library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling

## 📁 Project Structure

```
diagram-tool/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Main diagram page
│   │   └── globals.css     # Global styles
│   └── types/
│       └── index.ts        # TypeScript types
├── public/                 # Static assets
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
└── README.md             # This file
```

## 🎮 Usage

### Basic Drawing

- **Select Tool** - Click shapes in the toolbar
- **Draw** - Click and drag on the canvas
- **Move** - Select objects and drag them
- **Resize** - Drag the corners of selected objects
- **Delete** - Select objects and press `Delete`

### Keyboard Shortcuts

- **`V`** - Select tool
- **`R`** - Rectangle
- **`E`** - Ellipse
- **`A`** - Arrow
- **`T`** - Text
- **`S`** - Sticky note
- **`Ctrl/Cmd + Z`** - Undo
- **`Ctrl/Cmd + Y`** - Redo
- **`Ctrl/Cmd + A`** - Select all
- **`Delete`** - Delete selected

### Auto-Save

Your diagrams are automatically saved to your browser's localStorage:

- ✅ **Saves on every change**
- ✅ **Persists across browser sessions**
- ✅ **No account required**
- ✅ **Works offline**

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Adding Features

The project uses **tldraw** which provides:

- Infinite canvas
- Built-in shapes and tools
- Undo/redo system
- Export capabilities
- Plugin system

To customize or extend functionality, check the [tldraw documentation](https://tldraw.dev/docs).

## 🐛 Troubleshooting

### Common Issues

**1. Infinite Loop Errors**

- Clear browser localStorage: `localStorage.clear()`
- Hard refresh: `Ctrl/Cmd + Shift + R`

**2. Diagrams Not Saving**

- Check browser console for errors
- Ensure localStorage is enabled
- Try incognito/private mode

**3. Performance Issues**

- Close other browser tabs
- Clear browser cache
- Restart the development server

### Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📝 Use Cases

Perfect for creating:

- **🔗 Data Structures** - Trees, graphs, linked lists
- **🗃️ Database Schemas** - ERDs, table relationships
- **🏗️ System Architecture** - Microservices, cloud diagrams
- **📊 Flowcharts** - Process flows, decision trees
- **🎯 Wireframes** - UI mockups, user flows
- **📚 Mind Maps** - Brainstorming, concept mapping

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[tldraw](https://tldraw.dev/)** - Amazing infinite canvas library
- **[Next.js](https://nextjs.org/)** - Excellent React framework
- **[Vercel](https://vercel.com/)** - Deployment platform

---

**Happy Diagramming!** 🎨✨
