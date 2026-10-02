import Link from 'next/link';

export default function MLModelsPage() {
  return (
    <div className="docs-page">
      <div className="docs-breadcrumbs">
        <Link href="/docs">Documentation</Link>
        <span>/</span>
        <Link href="/docs/architecture/overview">Architecture</Link>
        <span>/</span>
        <span>ML Models & Alignment</span>
      </div>

      <h1>ml models & alignment</h1>
      <p className="lead">
        The ML subsystem provides specialized models for high-throughput, low-latency inference 
        across intent classification, agent routing, workflow planning, safety prediction, and preference alignment.
      </p>

      <h2>decision & routing models</h2>
      <p>
        These models power the intelligent routing and planning capabilities of PrismSpace:
      </p>

      <table>
        <thead>
          <tr>
            <th>Model Artifact</th>
            <th>Implementation</th>
            <th>Function & Architecture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>intent_classifier.joblib</code></td>
            <td><code>model/intent_classifier.py</code></td>
            <td>TF-IDF feature extraction with calibrated multi-class classifier mapping prompts to execution intents (Code, Search, Navigation, Terminal, SQL, Debug)</td>
          </tr>
          <tr>
            <td><code>agent_router.joblib</code></td>
            <td><code>model/agent_router.py</code></td>
            <td>Predicts optimal specialized agent from swarm (CodeExpert, BrowserAgent, SQLSpecialist, MCPToolAgent) given task embeddings</td>
          </tr>
          <tr>
            <td><code>model_router.joblib</code></td>
            <td><code>model/model_router.py</code></td>
            <td>Routes sub-tasks to cost-effective LLM provider/tier (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, Local Llama)</td>
          </tr>
          <tr>
            <td><code>workflow_success_predictor.joblib</code></td>
            <td><code>model/workflow_success_predictor.py</code></td>
            <td>Analyzes dependency DAGs and sub-goal features to forecast probability of task completion before dispatch</td>
          </tr>
          <tr>
            <td><code>approval_predictor.joblib</code></td>
            <td><code>model/approval_predictor.py</code></td>
            <td>Risk-scoring model for Human-in-the-Loop (HITL) governance; flags destructive commands (file deletion, remote commits, environment modification)</td>
          </tr>
          <tr>
            <td><code>latency_predictor.joblib</code></td>
            <td><code>model/cost_latency_predictor.py</code></td>
            <td>Regression model estimating execution time (ms) across planned tool paths</td>
          </tr>
          <tr>
            <td><code>cost_predictor.joblib</code></td>
            <td><code>model/cost_latency_predictor.py</code></td>
            <td>Predicts token consumption and API pricing per execution graph</td>
          </tr>
          <tr>
            <td><code>anomaly_detector.joblib</code></td>
            <td><code>model/anomaly_detector.py</code></td>
            <td>Isolation Forest / One-Class classifier detecting runaway agent loops, recursive tool invocations, and prompt injection traces</td>
          </tr>
        </tbody>
      </table>

      <h2>intent classification</h2>
      <p>
        The intent classifier is the first decision point in the ML pipeline:
      </p>

      <h3>intent categories</h3>
      <div className="quick-links-grid">
        <div className="quick-link-card">
          <span className="editorial-badge">Code</span>
          <span className="quick-link-desc">Code generation, refactoring, debugging</span>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">Search</span>
          <span className="quick-link-desc">Information retrieval, documentation lookup</span>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">Navigation</span>
          <span className="quick-link-desc">UI interaction, browser automation</span>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">Terminal</span>
          <span className="quick-link-desc">Shell commands, system operations</span>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">SQL</span>
          <span className="quick-link-desc">Database queries, schema operations</span>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">Debug</span>
          <span className="quick-link-desc">Error analysis, troubleshooting</span>
        </div>
      </div>

      <h3>architecture</h3>
      <ul>
        <li><strong>Feature Extraction</strong> - TF-IDF vectorization of input prompts</li>
        <li><strong>Classifier</strong> - Logistic regression or gradient boosting with probability calibration</li>
        <li><strong>Output</strong> - Intent label with confidence scores for all categories</li>
        <li><strong>Threshold</strong> - Confidence threshold for disambiguation vs multi-intent routing</li>
      </ul>

      <h2>agent routing</h2>
      <p>
        Once intent is classified, the agent router selects the optimal specialized agent:
      </p>

      <h3>swarm agents</h3>
      <table>
        <thead>
          <tr>
            <th>Agent</th>
            <th>Specialization</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>CodeExpert</strong></td>
            <td>Code generation, refactoring, AST manipulation</td>
            <td>File I/O, Git, linters, formatters</td>
          </tr>
          <tr>
            <td><strong>BrowserAgent</strong></td>
            <td>Web automation, UI testing, scraping</td>
            <td>Headless browser, selectors, screenshots</td>
          </tr>
          <tr>
            <td><strong>SQLSpecialist</strong></td>
            <td>Database queries, migrations, optimization</td>
            <td>SQL REPL, schema inspection, query planning</td>
          </tr>
          <tr>
            <td><strong>MCPToolAgent</strong></td>
            <td>Generic tool execution via MCP protocol</td>
            <td>All registered MCP tools</td>
          </tr>
        </tbody>
      </table>

      <h3>routing logic</h3>
      <pre><code># Simplified agent routing pseudocode
intent = classify_intent(user_prompt)
task_embedding = embed(user_prompt)

if intent == "Code":
    agent = CodeExpert
elif intent == "SQL":
    agent = SQLSpecialist
elif intent == "Navigation":
    agent = BrowserAgent
else:
    # Use learned routing model
    agent = agent_router.predict(task_embedding)</code></pre>

      <h2>model routing & cost optimization</h2>
      <p>
        The model router selects the most cost-effective LLM provider for each sub-task:
      </p>

      <h3>provider tiers</h3>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Model</th>
            <th>Use Case</th>
            <th>Cost/1M Tokens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Anthropic</strong></td>
            <td>Claude 3.5 Sonnet</td>
            <td>Complex reasoning, code generation</td>
            <td>$3.00 input / $15.00 output</td>
          </tr>
          <tr>
            <td><strong>OpenAI</strong></td>
            <td>GPT-4o</td>
            <td>Multimodal tasks, vision</td>
            <td>$2.50 input / $10.00 output</td>
          </tr>
          <tr>
            <td><strong>Google</strong></td>
            <td>Gemini 1.5 Pro</td>
            <td>Long context, batch processing</td>
            <td>$1.25 input / $5.00 output</td>
          </tr>
          <tr>
            <td><strong>Local</strong></td>
            <td>Llama 3.1 70B</td>
            <td>Privacy-sensitive, offline</td>
            <td>$0.00 (compute only)</td>
          </tr>
        </tbody>
      </table>

      <h3>routing criteria</h3>
      <ul>
        <li><strong>Task Complexity</strong> - Simple tasks → cheaper models</li>
        <li><strong>Context Length</strong> - Long context → Gemini 1.5 Pro</li>
        <li><strong>Latency Requirements</strong> - Real-time → faster endpoints</li>
        <li><strong>Budget Constraints</strong> - Cost limit per execution graph</li>
        <li><strong>Privacy Needs</strong> - Sensitive data → local model</li>
      </ul>

      <h2>workflow success prediction</h2>
      <p>
        Before executing a complex workflow, the success predictor estimates completion probability:
      </p>

      <h3>features</h3>
      <ul>
        <li>Number of sub-goals in DAG</li>
        <li>Dependency depth and branching factor</li>
        <li>Historical success rate for similar workflows</li>
        <li>Estimated total latency and cost</li>
        <li>Tool availability and reliability scores</li>
      </ul>

      <h3>output</h3>
      <pre><code>{`{
  "success_probability": 0.87,
  "confidence_interval": [0.82, 0.92],
  "risk_factors": [
    "High dependency depth (5 levels)",
    "External API dependency with 95% uptime"
  ],
  "recommendation": "proceed"
}`}</code></pre>

      <h2>approval prediction & safety</h2>
      <p>
        The approval predictor flags high-risk operations for human review:
      </p>

      <h3>risk categories</h3>
      <div className="quick-links-grid">
        <div className="quick-link-card">
          <span className="editorial-badge">Destructive</span>
          <span className="quick-link-desc">File deletion, database drops, irreversible changes</span>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">Elevated Access</span>
          <span className="quick-link-desc">Sudo commands, admin operations, permission changes</span>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">External</span>
          <span className="quick-link-desc">Remote git push, external API calls, data exfiltration</span>
        </div>
        <div className="quick-link-card">
          <span className="editorial-badge">Environment</span>
          <span className="quick-link-desc">Package installation, environment variables, system config</span>
        </div>
      </div>

      <h3>approval flow</h3>
      <pre><code>┌─────────────────┐
│  Tool Execution │
│     Request     │
└────────┬────────┘
         │
         ↓
  ┌──────────────┐
  │   Approval   │
  │  Predictor   │
  └──────┬───────┘
         │
    ┌────┴────┐
    │  Risk?  │
    └────┬────┘
         │
    ┌────┴────┐
    │   Low   │───→ Execute
    ├─────────┤
    │  Medium │───→ Log & Execute
    ├─────────┤
    │   High  │───→ Pause & Request Approval
    └─────────┘</code></pre>

      <h2>dense retrieval & semantic ranking</h2>
      <p>
        Hybrid dense-sparse retrieval for context injection:
      </p>

      <h3>architecture</h3>
      <ul>
        <li><strong>Dense Vectors</strong> - FAISS index with sentence-transformers embeddings</li>
        <li><strong>Sparse Signals</strong> - BM25 / TF-IDF for exact keyword matching</li>
        <li><strong>Fusion</strong> - Reciprocal Rank Fusion (RRF) combining both rankings</li>
        <li><strong>Re-ranking</strong> - Cross-encoder for final relevance scoring</li>
      </ul>

      <h3>indexed content</h3>
      <ul>
        <li>Codebase symbols (functions, classes, methods)</li>
        <li>MCP tool specifications and examples</li>
        <li>Documentation and README files</li>
        <li>Agent memory vectors from previous interactions</li>
        <li>Error messages and solutions</li>
      </ul>

      <h3>query flow</h3>
      <pre><code># Hybrid retrieval pipeline
query_vector = embed(user_query)

# Dense search
dense_results = faiss_index.search(query_vector, k=100)

# Sparse search  
sparse_results = bm25_index.search(user_query, k=100)

# Combine rankings
fused_results = reciprocal_rank_fusion(dense_results, sparse_results)

# Re-rank top candidates
final_results = cross_encoder.rerank(fused_results[:20])</code></pre>

      <h2>orpo reward & preference alignment</h2>
      <p>
        PrismSpace implements <strong>ORPO (Odds Ratio Preference Optimization)</strong> for efficient 
        preference learning without a separate reward model.
      </p>

      <div className="docs-callout">
        <div className="docs-callout-title">📄 Research Paper</div>
        <p>
          Based on Hong et al., EMNLP 2024: <em>ORPO: Monolithic Preference Optimization without Reference Model</em> 
          (<a href="https://arxiv.org/abs/2403.07691" target="_blank">arXiv:2403.07691</a>)
        </p>
      </div>

      <h3>orpo theory</h3>
      <p>
        Unlike classic RLHF (reward model + PPO) or DPO (requires frozen reference model in GPU memory), 
        ORPO embeds preference penalty directly into the supervised fine-tuning loss:
      </p>

      <h4>loss function</h4>
      <p>The ORPO loss combines supervised learning with odds ratio penalty:</p>
      <pre><code>ℒ_ORPO = ℒ_SFT + λ · ℒ_OR</code></pre>

      <p>Where the odds ratio penalty is:</p>
      <pre><code>ℒ_OR = - log σ ( log ( odds_θ(y_w|x) / odds_θ(y_l|x) ) )</code></pre>

      <h4>components</h4>
      <ul>
        <li><code>ℒ_SFT</code> - Standard supervised fine-tuning loss on preferred outputs</li>
        <li><code>ℒ_OR</code> - Odds ratio penalty that decreases probability of rejected outputs</li>
        <li><code>λ</code> - Hyperparameter controlling preference strength (typically 0.1-0.5)</li>
        <li><code>y_w</code> - Chosen/preferred agent trajectory</li>
        <li><code>y_l</code> - Rejected/suboptimal trajectory</li>
        <li><code>σ</code> - Sigmoid function</li>
      </ul>

      <h3>advantages over dpo</h3>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>DPO</th>
            <th>ORPO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Reference Model</strong></td>
            <td>Required (frozen in GPU memory)</td>
            <td>Not required</td>
          </tr>
          <tr>
            <td><strong>Memory Usage</strong></td>
            <td>2× model size</td>
            <td>1× model size</td>
          </tr>
          <tr>
            <td><strong>Training Speed</strong></td>
            <td>Slower (dual forward pass)</td>
            <td>Faster (single forward pass)</td>
          </tr>
          <tr>
            <td><strong>Implementation</strong></td>
            <td>Complex (reference model sync)</td>
            <td>Simple (unified loss)</td>
          </tr>
        </tbody>
      </table>

      <h3>application in prismspace</h3>
      <p>
        ORPO trains the agent to favor efficient tool API invocations over redundant UI exploration:
      </p>

      <h4>preference pairs</h4>
      <pre><code>{`# Example from EnvFactory-RL dataset
{
  "prompt": "Check the weather in San Francisco",
  "chosen": [
    {"tool": "weather_api", "args": {"city": "San Francisco"}},
    {"tool": "display_result", "args": {"data": "..."}}
  ],
  "rejected": [
    {"tool": "open_browser", "args": {"url": "weather.com"}},
    {"tool": "find_element", "args": {"selector": "#search"}},
    {"tool": "type_text", "args": {"text": "San Francisco"}},
    {"tool": "click", "args": {"selector": "#submit"}},
    {"tool": "extract_text", "args": {"selector": ".temp"}}
  ]
}`}</code></pre>

      <h4>training procedure</h4>
      <ol>
        <li>Load preference dataset (EnvFactory-RL, HH-RLHF)</li>
        <li>Extract chosen/rejected trajectory pairs</li>
        <li>Compute log probabilities for both trajectories</li>
        <li>Calculate odds ratio and apply penalty</li>
        <li>Backpropagate combined ORPO loss</li>
        <li>Evaluate on held-out preference test set</li>
      </ol>

      <h2>training & evaluation</h2>

      <h3>training commands</h3>
      <pre><code># Quick smoke test (1000 samples)
python -m model.train --dataset-dir model/datasets/training --output-dir model/artifacts_test --max-rows-per-file 1000

# Full production training
python -m model.train --dataset-dir model/datasets/training --output-dir model/artifacts --max-rows-per-file 50000</code></pre>

      <h3>model testing</h3>
      <pre><code># Test intent classifier
python -m model.predict model/artifacts/intent_classifier.joblib "Analyze the slow SQL query"

# Test agent router
python -m model.predict model/artifacts/agent_router.joblib "Launch headless browser"

# Test approval predictor
python -m model.predict model/artifacts/approval_predictor.joblib "Drop table users"</code></pre>

      <h3>evaluation metrics</h3>
      <pre><code># Run full evaluation suite
python -m model.evaluate --output-dir model/artifacts

# Generates evaluation_report.json with:
# - Accuracy, precision, recall, F1 per model
# - ROC-AUC for binary classifiers
# - Mean squared error for regressors
# - Latency benchmarks
# - Per-class confusion matrices</code></pre>

      <h2>next steps</h2>
      <div className="quick-links-grid">
        <Link href="/docs/architecture/datasets" className="quick-link-card">
          <span className="quick-link-icon">📊</span>
          <span className="quick-link-title">Datasets & Benchmarks</span>
          <span className="quick-link-desc">Training data sources and preparation</span>
        </Link>

        <Link href="/docs/api/training" className="quick-link-card">
          <span className="quick-link-icon">🧠</span>
          <span className="quick-link-title">Training Guide</span>
          <span className="quick-link-desc">Step-by-step model training procedures</span>
        </Link>

        <Link href="/docs/api/testing" className="quick-link-card">
          <span className="quick-link-icon">🧪</span>
          <span className="quick-link-title">Model Testing</span>
          <span className="quick-link-desc">Testing and inference workflows</span>
        </Link>
      </div>

      <div className="docs-nav-footer">
        <Link href="/docs/architecture/overview" className="docs-nav-button prev">
          <span className="docs-nav-label">Previous</span>
          <span className="docs-nav-title">← System Overview</span>
        </Link>
        <Link href="/docs/architecture/datasets" className="docs-nav-button">
          <span className="docs-nav-label">Next</span>
          <span className="docs-nav-title">Datasets & Benchmarks →</span>
        </Link>
      </div>
    </div>
  );
}
