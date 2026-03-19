import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white mb-3">Manish Kumar</h1>
        <p className="text-gray-400 text-lg mb-6">AI Engineer • Machine Learning • Deep Learning Systems</p>
        <p className="text-gray-300 mb-8">
          I build intelligent systems using deep learning, transformers, and scalable machine learning pipelines.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/manishengineertech1582-code" target="_blank" className="text-blue-400 hover:text-blue-300">GitHub</a>
          <a href="https://www.linkedin.com/in/manish-kumar-8652871/" target="_blank" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
          <a href="mailto:manish.engineer.tech.1582@gmail.com" className="text-blue-400 hover:text-blue-300">Email</a>
        </div>
      </div>

      {/* Blog */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Engineering Blog</h2>
        <div className="space-y-4">

          <Link href="/blog/finrag-engine" className="block p-5 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-medium mb-1">FinRAG Engine — Building a Production RAG System</h3>
                <p className="text-gray-400 text-sm">LangChain 0.3+ · FAISS · OpenAI · FastAPI · 19 bugs fixed</p>
              </div>
              <span className="text-gray-500 text-sm ml-4 whitespace-nowrap">March 2026</span>
            </div>
          </Link>

          <Link href="/blog/ml-system-design" className="block p-5 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-medium mb-1">Building a Production-Ready Deep Learning System</h3>
                <p className="text-gray-400 text-sm">PyTorch · FastAPI · Docker · Model Deployment</p>
              </div>
              <span className="text-gray-500 text-sm ml-4 whitespace-nowrap">2026</span>
            </div>
          </Link>

        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl">
            <h3 className="text-blue-400 font-medium mb-2">AI / Machine Learning</h3>
            <p className="text-gray-300 text-sm">PyTorch · TensorFlow · Scikit-learn · Transformers · NLP · Computer Vision · RAG Systems</p>
          </div>
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl">
            <h3 className="text-blue-400 font-medium mb-2">Data Engineering</h3>
            <p className="text-gray-300 text-sm">Python · Pandas · NumPy · SQL · Data Processing · FAISS · Vector Databases</p>
          </div>
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl">
            <h3 className="text-blue-400 font-medium mb-2">MLOps & Deployment</h3>
            <p className="text-gray-300 text-sm">Docker · FastAPI · LangChain · OpenAI API · Model Deployment · ML Pipelines</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        © 2026 Manish Kumar · AI Engineer
      </footer>

    </main>
  )
}