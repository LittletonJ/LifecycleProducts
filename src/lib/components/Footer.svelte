<script lang="ts">
	import { Leaf, Sun, Battery } from 'lucide-svelte';
</script>

<footer class="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-auto">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h3 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">LifecycleProducts</h3>
				<p class="text-slate-600 dark:text-slate-400 text-sm">
					Helping you make informed decisions about the products you use,
					considering their full environmental and social impact.
				</p>
			</div>
			<div>
				<h4 class="font-semibold mb-4">Quick Links</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="/assessments" class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">View Assessments</a></li>
					<li><a href="/methodology" class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">Our Methodology</a></li>
					<li><a href="/store" class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">Shop Products</a></li>
				</ul>
			</div>
			<div>
				<h4 class="font-semibold mb-4">Hosted Sustainably</h4>
				<div class="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
					<div class="flex items-center space-x-1">
						<Sun class="w-4 h-4 text-yellow-500" />
						<span>Solar Powered</span>
					</div>
					<div class="flex items-center space-x-1">
						<Battery class="w-4 h-4 text-green-500" />
						<span>Raspberry Pi</span>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-500">
			<p>&copy; {new Date().getFullYear()} LifecycleProducts. Built with care for our planet.</p>
			<p class="mt-2 italic">This is a concept site for demonstration purposes only.</p>
		</div>
	</div>
</footer>
