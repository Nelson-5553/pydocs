# 🤝 Contributing Guide - PyDocs

Thank you for your interest in contributing to PyDocs! This modern Python documentation is built with community collaboration. Your contribution is valuable and welcome.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How can I contribute?](#how-can-i-contribute)
- [Development environment setup](#development-environment-setup)
- [Project structure](#project-structure)
- [Style guides](#style-guides)
- [Contribution process](#contribution-process)
- [Reporting bugs](#reporting-bugs)
- [Suggesting improvements](#suggesting-improvements)
- [Translation](#translation)
- [Recognition](#recognition)

## 📜 Code of Conduct

This project adheres to a code of conduct that we expect all participants to respect. By participating, you commit to maintaining a welcoming and respectful environment for everyone.

### Our values:
- **Respect**: Treat everyone with courtesy and consideration
- **Inclusion**: Welcome developers of all levels
- **Collaboration**: Work together towards common goals
- **Learning**: Foster growth and education

## 🚀 How can I contribute?

There are many ways to contribute to PyDocs:

### 📝 Documentation
- Improve existing explanations
- Add new code examples
- Fix typos or grammatical errors
- Translate content to English or Spanish
- Create new sections or topics

### 🐛 Bug reports
- Errors in example code
- Broken links
- Rendering issues
- Documentation inconsistencies

### ✨ New features
- New interactive components
- Design improvements
- Additional functionality
- Performance optimizations

### 🌍 Translation
- Translate existing content
- Review translations
- Maintain consistency between languages

## 🛠️ Development environment setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn
- Git

### Installation steps

1. **Fork the repository**
   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/pydocs.git
   cd pydocs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Useful commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build site for production |
| `npm run preview` | Preview production build |
| `npm run astro check` | Check TypeScript errors |

## 📁 Project structure

```
pydocs/
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── es/           # Spanish content
│   │       └── en/           # English content
│   ├── components/           # Reusable components
│   ├── assets/              # Images and resources
│   └── styles/              # Global styles
├── public/                  # Static files
├── astro.config.mjs         # Astro configuration
└── package.json
```

### Content organization

- **`/es/`**: Spanish documentation (primary language)
- **`/en/`**: English documentation
- **Main categories**:
  - `introduction/` - Introduction to Python
  - `syntax-basic/` - Basic syntax
  - `data-structure/` - Data structures
  - `control-structures/` - Control structures
  - `functions/` - Functions
  - `native-functions/` - Native functions
  - `file-management/` - File management
  - `error-handling/` - Error handling
  - `POO/` - Object-Oriented Programming
  - `modules-packages/` - Modules and packages
  - `venv-packages/` - Virtual environments

## 🎨 Style guides

### Documentation

#### File format
- Use `.mdx` files for content with components
- Use `.md` files for simple content
- Always include required frontmatter:

```yaml
---
title: Page title
description: Brief description
sidebar:
  order: 1
---
```

#### Writing style
- **Tone**: Friendly, educational, and accessible
- **Audience**: Developers of all levels
- **Length**: Concise but complete sections
- **Examples**: Always include practical examples

#### Example code
```python
# ✅ Good: Clear code with comments
def greet(name):
    """Function that greets a person."""
    print(f"Hello, {name}!")

# Call the function
greet("PyDocs")
```

```python
# ❌ Avoid: Code without context
def f(x):
    print(x)
```

#### Available components
- `<Code>` - Code blocks with highlighting
- `<Aside>` - Notes, tips, and warnings
- `<PyTable>` - Custom tables
- `<Card>` and `<CardGrid>` - Information cards

### Code style

#### File names
- Use kebab-case: `my-new-feature.mdx`
- Descriptive names in English
- Avoid spaces and special characters

#### Components
- PascalCase for component names
- Descriptive and typed props
- JSDoc documentation when necessary

## 🔄 Contribution process

### 1. Preparation
1. Fork the repository
2. Create a branch for your contribution:
   ```bash
   git checkout -b feature/new-asyncio-section
   # or
   git checkout -b fix/fix-lists-example
   # or
   git checkout -b docs/improve-introduction
   ```

### 2. Development
1. Make your changes following the style guides
2. Test locally with `npm run dev`
3. Verify no errors with `npm run build`

### 3. Commit
Use descriptive commit messages:
```bash
# ✅ Good examples
git commit -m "docs: add async/await section"
git commit -m "fix: correct lists example in Spanish"
git commit -m "feat: add improved PyTable component"

# ❌ Avoid
git commit -m "changes"
git commit -m "fix"
```

### 4. Pull Request
1. Push to your fork:
   ```bash
   git push origin feature/new-asyncio-section
   ```

2. Create a Pull Request with:
   - **Descriptive title**
   - **Detailed description** of changes
   - **Screenshots** if there are visual changes
   - **References** to related issues

#### PR Template
```markdown
## 📝 Description
Brief description of the changes made.

## 🔄 Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation improvement
- [ ] Translation
- [ ] Refactoring

## 🧪 Tests performed
- [ ] Tested locally
- [ ] Successful build
- [ ] Links working

## 📷 Screenshots (if applicable)
[Add screenshots]

## 📋 Checklist
- [ ] I have followed the style guides
- [ ] I have tested my changes locally
- [ ] I have updated documentation if necessary
```

## 🐛 Reporting bugs

### Before reporting
1. Search existing issues
2. Verify the error persists in the latest version
3. Reproduce the error in different browsers if possible

### Report template
```markdown
## 🐛 Bug description
Clear and concise description of the problem.

## 🔄 Steps to reproduce
1. Go to '...'
2. Click on '...'
3. Observe the error

## ✅ Expected behavior
What should happen.

## 📷 Screenshots
If applicable, add screenshots.

## 🌐 Environment
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 91]
- Version: [e.g. 1.2.3]
```

## 💡 Suggesting improvements

### Suggestion template
```markdown
## 🚀 Improvement description
Clear description of the proposed improvement.

## 🎯 Problem it solves
What current problem does this improvement solve?

## 💭 Proposed solution
Detailed description of how you would implement the improvement.

## 🔄 Alternatives considered
Other solutions you considered.

## 📋 Additional information
Any additional context or screenshots.
```

## 🌍 Translation

### Supported languages
- **Spanish** (es) - Primary language
- **English** (en) - Secondary translation

### Translation process
1. Identify content that needs translation
2. Create corresponding folder structure
3. Translate while maintaining:
   - Document structure
   - Code examples (translated comments)
   - Frontmatter metadata
   - Updated internal links

### Conventions
- Maintain consistency in technical terms
- Adapt examples to cultural context when appropriate
- Preserve educational and friendly tone

## 🏆 Recognition

### Types of contribution
- 📝 **Documentation**: Writing or improving docs
- 🐛 **Bugs**: Reporting or fixing bugs
- 💡 **Ideas**: Suggesting improvements
- 🌍 **Translation**: Translating content
- 🎨 **Design**: Improving UI/UX
- 💻 **Code**: Developing functionality

### How you appear as a contributor
- Your profile automatically appears on the main page
- Different types of contributions are recognized
- Regular contributors may get additional permissions

## 📞 Contact and help

### Need help?
- **Issues**: For reports and suggestions
- **Discussions**: For general questions
- **Email**: andresnelson2004@hotmail.com

### Useful resources
- [Astro Documentation](https://docs.astro.build/)
- [Starlight Documentation](https://starlight.astro.build/)
- [Markdown Guide](https://www.markdownguide.org/)

---

## 🙏 Thank you for contributing!

Every contribution, no matter its size, makes PyDocs better for the entire Python developer community. We look forward to working with you!

**First time contributing to an open source project?** Don't worry! We all started somewhere. Don't hesitate to ask questions and request help.

---

<div align="center">

**[⬆️ Back to top](#-contributing-guide---pydocs)**

Made with ❤️ by the PyDocs community

</div>
